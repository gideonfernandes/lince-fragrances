import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md';
import MoonLoader from "react-spinners/MoonLoader";

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../utils/format';

import Header from '../../components/Header';

import { LoadContainer, Container, ProductTable, Total } from './styles';

const Cart = ({
  isAuthenticated,
  loading,
  history,
  cart,
  total,
  removeFromCart,
  updateAmountRequest
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

          <footer>
            <button type="button">Finalizar pedido</button>

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
  loading: state.auth.loading,
  cart: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(state.cart.reduce((total, product) => {
    return total + (product.price * product.amount);
  }, 0)),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
