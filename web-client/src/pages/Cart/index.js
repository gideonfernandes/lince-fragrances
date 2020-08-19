import React from 'react';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, ProductTable, Total } from './styles';

const Cart = () => {
  return (
    <>
      <Header />
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
            <tr>
              <td>
              <img
                src="http://localhost:8888/files/product2.jpg"
                alt="Carolina Herrera Ean de Toilette"
              />
              </td>
              <td>
                <strong>Carolina Herrera Ean de Toilette</strong>
                <span>R$319,00</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                  >
                    <MdRemoveCircleOutline size={20} color="#AA6C39" />
                  </button>
                  <input type="number" readOnly value={3} />
                  <button
                    type="button"
                  >
                    <MdAddCircleOutline size={20} color="#AA6C39" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$1562,92</strong>
              </td>
              <td>
                <button
                  type="button"
                >
                  <MdDelete size={20} color="#AA6C39" />
                </button>
              </td>
            </tr>
            <tr>
              <td>
              <img
                src="http://localhost:8888/files/product2.jpg"
                alt="Carolina Herrera Ean de Toilette"
              />
              </td>
              <td>
                <strong>Carolina Herrera Ean de Toilette</strong>
                <span>R$319,00</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                  >
                    <MdRemoveCircleOutline size={20} color="#AA6C39" />
                  </button>
                  <input type="number" readOnly value={3} />
                  <button
                    type="button"
                  >
                    <MdAddCircleOutline size={20} color="#AA6C39" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$1562,92</strong>
              </td>
              <td>
                <button
                  type="button"
                >
                  <MdDelete size={20} color="#AA6C39" />
                </button>
              </td>
            </tr>
            <tr>
              <td>
              <img
                src="http://localhost:8888/files/product2.jpg"
                alt="Carolina Herrera Ean de Toilette"
              />
              </td>
              <td>
                <strong>Carolina Herrera Ean de Toilette</strong>
                <span>R$319,00</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                  >
                    <MdRemoveCircleOutline size={20} color="#AA6C39" />
                  </button>
                  <input type="number" readOnly value={3} />
                  <button
                    type="button"
                  >
                    <MdAddCircleOutline size={20} color="#AA6C39" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$1562,92</strong>
              </td>
              <td>
                <button
                  type="button"
                >
                  <MdDelete size={20} color="#AA6C39" />
                </button>
              </td>
            </tr>
            <tr>
              <td>
              <img
                src="http://localhost:8888/files/product2.jpg"
                alt="Carolina Herrera Ean de Toilette"
              />
              </td>
              <td>
                <strong>Carolina Herrera Ean de Toilette</strong>
                <span>R$319,00</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                  >
                    <MdRemoveCircleOutline size={20} color="#AA6C39" />
                  </button>
                  <input type="number" readOnly value={3} />
                  <button
                    type="button"
                  >
                    <MdAddCircleOutline size={20} color="#AA6C39" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$1562,92</strong>
              </td>
              <td>
                <button
                  type="button"
                >
                  <MdDelete size={20} color="#AA6C39" />
                </button>
              </td>
            </tr>
          </tbody>
        </ProductTable>

        <footer>
          <button type="button">Finalizar pedido</button>

          <Total>
            <span>TOTAL</span>
            <strong>R$3356,50</strong>
          </Total>
        </footer>
      </Container>
      <Footer />
    </>
  );
}

export default Cart;
