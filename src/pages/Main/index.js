import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  AdditionalInfo,
} from './styles';

import Header from '~/components/Header';
import Menu from '~/components/Menu';
import Tabs from '~/components/Tabs';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Menu />
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#999" />
            <Icon name="visibility-off" size={28} color="#999" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 453.000,00 </Description>
          </CardContent>
          <CardFooter>
            <Icon name="attach-money" size={28} color="#999" />
            <AdditionalInfo>
              Dinheiro guardado no valor de R$ 1.000,00 ontem
            </AdditionalInfo>
            <Icon name="keyboard-arrow-right" size={20} color="#999" />
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}
