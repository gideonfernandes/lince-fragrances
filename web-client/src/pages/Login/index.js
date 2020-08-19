import React from 'react';

import { Container, FormContainer } from './styles';
import Logo from '../../components/Logo';

const Login = () => {
  return (
    <Container>
      <Logo />
      <FormContainer>
        <h1>
          Adquira os <strong>melhores</strong> perfumes importados, 
          fragâncias <strong>peculiares</strong> que encantam.
        </h1>

        <form>
          <label htmlFor="name">NOME *</label>
          <input
            type="text" 
            name="name"
            placeholder="Seu nome"
            required
          />

          <label htmlFor="lastName">SOBRENOME *</label>
          <input
            type="text" 
            name="lastName"
            placeholder="Seu sobrenome"
            required
          />

          <label htmlFor="email">EMAIL *</label>
          <input
            type="email" 
            name="email"
            placeholder="Seu melhor e-mail"
            required
          />

          <button type="submit" className="btn">FINALIZAR CADASTRO</button>
        </form>
      </FormContainer>
    </Container>
  );
}

export default Login;
