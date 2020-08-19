import React from 'react';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import Logo from '../Logo';

function Header() {
  return (
    <Container>
      <Logo />
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={38} color="#FFF" />
      </Cart>
    </Container>
  );
}

export default Header;
