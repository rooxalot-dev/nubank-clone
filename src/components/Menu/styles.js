import styled from 'styled-components/native';
import {Animated, StyleSheet} from 'react-native';

export const Container = styled(Animated.ScrollView).attrs({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})`
  margin: 10px 0;
`;

export const AcconuntInfo = styled.View`
  margin: 10px 0;
  justify-content: space-between;
  height: 50px;
`;

export const Bank = styled.View`
  flex-direction: row;
`;

export const Agency = styled.View`
  flex-direction: row;
`;

export const Account = styled.View`
  flex-direction: row;
`;

export const Nav = styled.View`
  padding: 10px 20px;
  width: 100%;
`;

export const NavItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.4);
`;

export const NavOption = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const NavText = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-left: 12px;
`;

export const SignOutButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.4);
  font-weight: bold;
  height: 45px;
  margin-top: 12px;
`;

export const SignOutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-left: 12px;
`;

export const Regular = styled.Text`
  font-weight: 400;
  color: #fff;
`;

export const Strong = styled.Text`
  font-weight: bold;
  color: #fff;
  margin-left: 5px;
`;
