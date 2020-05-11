import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode-svg';

import {
  Container,
  AcconuntInfo,
  Bank,
  Agency,
  Account,
  Strong,
  Regular,
  Nav,
  NavItem,
  NavOption,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from './styles';

export default function Menu({translateY}) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 200],
          outputRange: [0, 1],
        }),
      }}>
      <QRCode
        value="https://github.com/rooxalot-dev/nubank-clone"
        size={110}
        quietZone={8}
        color="#8b10ae"
        backgroundColor="#fff"
      />

      <AcconuntInfo>
        <Bank>
          <Regular>Banco</Regular>
          <Strong>260 - Nu Pagamentos S.A.</Strong>
        </Bank>
        <Agency>
          <Regular>Agência</Regular>
          <Strong>0001</Strong>
        </Agency>
        <Account>
          <Regular>Conta</Regular>
          <Strong>0000000-0</Strong>
        </Account>
      </AcconuntInfo>

      <Nav>
        <NavItem>
          <NavOption>
            <Icon name="help-outline" size={28} color="#fff" />
            <NavText>Me Ajuda</NavText>
          </NavOption>
          <Icon name="keyboard-arrow-right" size={18} color="#fff" />
        </NavItem>

        <NavItem>
          <NavOption>
            <Icon name="person-outline" size={28} color="#fff" />
            <NavText>Meu Perfil</NavText>
          </NavOption>
          <Icon name="keyboard-arrow-right" size={18} color="#fff" />
        </NavItem>

        <NavItem>
          <NavOption>
            <Icon name="credit-card" size={28} color="#fff" />
            <NavText>Meu Cartão</NavText>
          </NavOption>
          <Icon name="keyboard-arrow-right" size={18} color="#fff" />
        </NavItem>

        <NavItem>
          <NavOption>
            <Icon name="smartphone" size={28} color="#fff" />
            <NavText>Configurações do App</NavText>
          </NavOption>
          <Icon name="keyboard-arrow-right" size={18} color="#fff" />
        </NavItem>

        <SignOutButton>
          <SignOutButtonText>SAIR DO APP</SignOutButtonText>
        </SignOutButton>
      </Nav>
    </Container>
  );
}
