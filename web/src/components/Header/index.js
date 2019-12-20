/* eslint-disable import/no-unresolved */
import React from 'react';
import { useDispatch} from 'react-redux';

import { Container, Content, Profile, NavItem } from './styles';

import { signOut } from '../../store/modules/auth/actions';

import logo from '~/assets/logo-header.png';

export default function Header() {
  const dispatch = useDispatch();
  // const user = useSelector(state => state.auth.user); Não consegui fazer funcionar.

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="GymPoint" />
        <nav>
          <NavItem to="/students">ALUNOS</NavItem>
          <NavItem to="/plans">PLANOS</NavItem>
          <NavItem to="/registrations">MATRÍCULAS</NavItem>
          <NavItem to="/help-orders">PEDIDOS DE AUXÍLIO</NavItem>
        </nav>
      </Content>

      <Profile>
        <strong>ADMINISTRADOR</strong>
        <button type="button" onClick={handleSignOut}>
          Logout
        </button>
      </Profile>
    </Container>
  );
}
