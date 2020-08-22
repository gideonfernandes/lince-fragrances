import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdShoppingBasket, MdPowerSettingsNew } from 'react-icons/md';

import * as AuthActions from '../../store/modules/auth/actions';

import { Container, Cart } from './styles';
import Logo from '../Logo';

const Header = ({ cartSize, logout }) => {
  const handleLogout = () => {
    logout();
  };

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
      <MdPowerSettingsNew size={26} color="#FFF" onClick={handleLogout}/>
    </Container>
  );
}

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
