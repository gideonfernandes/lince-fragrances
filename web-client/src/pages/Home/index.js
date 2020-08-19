import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ProductList } from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  render() {
    return (
      <>
      <Header />
        <ProductList>
          <li>
            <img
              src="http://localhost:8888/files/product2.jpg"
              alt="Carolina Herrera Ean de Toilette"
            />
            <strong>Carolina Herrera Ean de Toilette</strong>
            <span>R$319,00</span>

            <button
              type="button"
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />
              </div>

              <span>Adicionar ao carrinho</span>
            </button>
          </li>
          <li>
            <img
              src="http://localhost:8888/files/product2.jpg"
              alt="Carolina Herrera Ean de Toilette"
            />
            <strong>Carolina Herrera Ean de Toilette</strong>
            <span>R$319,00</span>

            <button
              type="button"
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />
              </div>

              <span>Adicionar ao carrinho</span>
            </button>
          </li>
          <li>
            <img
              src="http://localhost:8888/files/product2.jpg"
              alt="Carolina Herrera Ean de Toilette"
            />
            <strong>Carolina Herrera Ean de Toilette</strong>
            <span>R$319,00</span>

            <button
              type="button"
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />
              </div>

              <span>Adicionar ao carrinho</span>
            </button>
          </li>
          <li>
            <img
              src="http://localhost:8888/files/product2.jpg"
              alt="Carolina Herrera Ean de Toilette"
            />
            <strong>Carolina Herrera Ean de Toilette</strong>
            <span>R$319,00</span>

            <button
              type="button"
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />
              </div>

              <span>Adicionar ao carrinho</span>
            </button>
          </li>
          <li>
            <img
              src="http://localhost:8888/files/product2.jpg"
              alt="Carolina Herrera Ean de Toilette"
            />
            <strong>Carolina Herrera Ean de Toilette</strong>
            <span>R$319,00</span>

            <button
              type="button"
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />
              </div>

              <span>Adicionar ao carrinho</span>
            </button>
          </li>
          <li>
            <img
              src="http://localhost:8888/files/product2.jpg"
              alt="Carolina Herrera Ean de Toilette"
            />
            <strong>Carolina Herrera Ean de Toilette</strong>
            <span>R$319,00</span>

            <button
              type="button"
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />
              </div>

              <span>Adicionar ao carrinho</span>
            </button>
          </li>
          <li>
            <img
              src="http://localhost:8888/files/product2.jpg"
              alt="Carolina Herrera Ean de Toilette"
            />
            <strong>Carolina Herrera Ean de Toilette</strong>
            <span>R$319,00</span>

            <button
              type="button"
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />
              </div>

              <span>Adicionar ao carrinho</span>
            </button>
          </li>
          <li>
            <img
              src="http://localhost:8888/files/product2.jpg"
              alt="Carolina Herrera Ean de Toilette"
            />
            <strong>Carolina Herrera Ean de Toilette</strong>
            <span>R$319,00</span>

            <button
              type="button"
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />
              </div>

              <span>Adicionar ao carrinho</span>
            </button>
          </li>
          <li>
            <img
              src="http://localhost:8888/files/product2.jpg"
              alt="Carolina Herrera Ean de Toilette"
            />
            <strong>Carolina Herrera Ean de Toilette</strong>
            <span>R$319,00</span>

            <button
              type="button"
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />
              </div>

              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        </ProductList>
        <Footer />
      </>
    );
  }
};

export default Home;
