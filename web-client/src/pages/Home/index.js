import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MoonLoader from "react-spinners/MoonLoader";

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../utils/format';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { LoadContainer, ProductList } from './styles';

const Home = ({ isAuthenticated, history, amount, addToCartRequest }) => {
  useEffect(() => {
    if (!isAuthenticated) {
      history.push('/login');
    };
  }, [history, isAuthenticated]);
  
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      const loadProducts = async () => {
        setLoading(true);
  
        const response = await api.get('/products');
        const data = response.data.map(product => ({
          ...product,
          priceFormatted: formatPrice(product.price),
        }));
        setProducts(data);
  
        setLoading(false);
      };

      loadProducts();
    };
  },[isAuthenticated]);

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
        <ProductList>
          {products.map(product => (
            <li key={product.id}>
              <img
                src={product.image_url}
                alt={product.title}
              />
              <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>

              <button
                type="button"
                onClick={() => addToCartRequest(product.id)}
              >
                <div>
                  <MdAddShoppingCart size={16} color="#FFF" /> {' '}
                  {amount[product.id] || 0}
                </div>

                <span>Adicionar ao carrinho</span>
              </button>
            </li>
          ))};
        </ProductList>
      )}
      <Footer />
    </>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
