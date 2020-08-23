import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md';
import { toast } from 'react-toastify';
import MoonLoader from "react-spinners/MoonLoader";
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../utils/format';

import Header from '../../components/Header';
import Purchase from '../../components/Purchase';

import {
  LoadContainer,
  Container,
  ProductTable,
  Total
} from './styles';

const Cart = ({
  isAuthenticated,
  authenticateUserId,
  loading,
  history,
  cart,
  total,
  removeFromCart,
  resetCart,
  updateAmountRequest,
  totalWithoutFormat,
}) => {
  useEffect(() => {
    if (!isAuthenticated) {
      history.push('/login');
    };
  }, [history, isAuthenticated]);

  const decrementAmount = (product) => {
    updateAmountRequest(product.id, product.amount - 1);
  };

  const incrementAmount = (product) => {
    updateAmountRequest(product.id, product.amount + 1);
  };

  const [purchaseData, setPurchaseData] = useState({
    user_id: null,
    order: [],
    total: 0,
  });

  const [purchaseDone, setPurchaseDone] = useState(false);
  const [purchaseDataToShow, setPurchaseDataToShow] = useState({});  

  useEffect(() => {
    setPurchaseData({
      user_id: authenticateUserId,
      order: cart.map(product => ({
        product_id: product.id,
        title: product.title,
        amount: product.amount,
        subtotal: (product.price * product.amount),
      })),
      total: totalWithoutFormat,
    });
  }, [authenticateUserId, cart, total, totalWithoutFormat]);

  const handlePurchase = async (purchaseData) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const response = await api.post(
        '/purchases',
        JSON.stringify(purchaseData),
        config,
      );

      const purchase = response.data;
      
      setPurchaseDone(true);
      setPurchaseDataToShow(purchase);

    } catch (error) {
      toast.error(error.message);
    };
  };

  const handleBackHome = () => {
    resetCart();
    history.push('/');
  };
  
  return (
    <>
      <Header />
      {loading ? (
        <LoadContainer>
          <MoonLoader
            size={150}
            color={"#FFF"}
            loading={loading}
          />
        </LoadContainer>
      ) : (
        <Container>
          {!purchaseDone ? (
            <ProductTable>
              <thead>
                <tr>
                  <th />
                  <th>PRODUTO</th>
                  <th>QTD</th>
                  <th>SUBTOTAL</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {cart.map(product => (
                  <tr key={product.id}>
                    <td>
                    <img
                      src={product.image_url}
                      alt={product.title}
                    />
                    </td>
                    <td>
                      <strong>{product.title}</strong>
                      <span>{product.priceFormatted}</span>
                    </td>
                    <td>
                      <div>
                        <button
                          type="button"
                          onClick={() => decrementAmount(product)}
                        >
                          <MdRemoveCircleOutline size={20} color="#AA6C39" />
                        </button>
                        <input type="number" readOnly value={product.amount} />
                        <button
                          type="button"
                          onClick={() => incrementAmount(product)}
                        >
                          <MdAddCircleOutline size={20} color="#AA6C39" />
                        </button>
                      </div>
                    </td>
                    <td>
                      <strong>{product.subTotal}</strong>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => removeFromCart(product.id)}
                      >
                        <MdDelete size={20} color="#AA6C39" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </ProductTable>
          ) : (
            <Purchase purchaseData={purchaseDataToShow} />
          )}
          <footer>
            {!purchaseDone ? (
              <button
                type="button"
                onClick={() => handlePurchase(purchaseData)}
              >
                Finalizar pedido
              </button>
            ) : (
              <button
                type="button"
                onClick={handleBackHome}
              >
                Voltar para home
              </button>
            )}
            <Total>
              <span>TOTAL</span>
              <strong>{total}</strong>
            </Total>
          </footer>
        </Container>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  authenticateUserId: state.auth.user,
  loading: state.auth.loading,
  cart: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(state.cart.reduce((total, product) => {
    return total + (product.price * product.amount);
  }, 0)),
  totalWithoutFormat: state.cart.reduce((total, product) => {
    return total + (product.price * product.amount);
  }, 0),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
