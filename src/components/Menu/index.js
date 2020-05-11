import React from 'react';
import QRCode from 'react-native-qrcode-svg';

import {Container} from './styles';

export default function Menu() {
  return (
    <Container>
      <QRCode
        value="http://awesome.link.qr"
        size={80}
        quietZone={5}
        color="#8b10ae"
        backgroundColor="#fff"
      />
    </Container>
  );
}
