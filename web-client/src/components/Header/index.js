import React from 'react';
import { connect } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';
import Logo from '../Logo';

const Header = ({ cartSize }) => {
  return (
    <Container>
      <Logo />
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={38} color="#FFF" />
      </Cart>
    </Container>
  );
}

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
