import React from 'react';
import {Animated} from 'react-native';
import {State, PanGestureHandler} from 'react-native-gesture-handler';
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
  let offset = 0;
  const translateY = new Animated.Value(0);

  const handleGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  function handleStateChange(e) {
    const nativeEvent = e.nativeEvent;
    console.log('Native Event: ', nativeEvent);

    if (nativeEvent.oldState === State.ACTIVE) {
      let cardOpened = false;

      const actualTranslationY = nativeEvent.translationY;
      offset += actualTranslationY;

      if (actualTranslationY >= 100) {
        cardOpened = true;
      } else {
        cardOpened = false;
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: cardOpened ? 360 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = cardOpened ? 360 : 0;
        translateY.setOffset(offset);
      });
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={handleGestureEvent}
          onHandlerStateChange={handleStateChange}>
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-200, 0, 360],
                    outputRange: [-20, 0, 360],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
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
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}
