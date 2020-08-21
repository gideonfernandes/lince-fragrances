import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ProductList } from './styles';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
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
  },[]);

  return (
    <>
      <Header />
      <ProductList>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          products.map(product => (
            <li key={product.id}>
              <img
                src={product.image_url}
                alt={product.title}
              />
              <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>

              <button
                type="button"
              >
                <div>
                  <MdAddShoppingCart size={16} color="#FFF" />
                </div>

                <span>Adicionar ao carrinho</span>
              </button>
            </li>
          ))
        )}
      </ProductList>
      <Footer />
    </>
  );
};

export default Home;
