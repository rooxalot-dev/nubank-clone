import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-evenly;
  background-color: #8b10ae;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 380px;
  position: relative;
`;

export const Card = styled.View`
  position: absolute;
  right: 0;
  left: 0;
  top: 320px;
  /* top: 0; */
  bottom: 0;
  height: 90%;
  flex: 1;
  justify-content: space-between;
  margin: 20px;
  border-radius: 2px;
  background-color: #fff;
  z-index: 5;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 25px;
`;

export const CardContent = styled.View`
  padding: 20px;
  flex: 1;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  background-color: rgba(100, 100, 100, 0.05);
`;

export const Title = styled.Text`
  font-size: 19px;
  color: #777;
`;

export const Description = styled.Text`
  margin-top: 5px;
  font-size: 34px;
  font-weight: 500;
  letter-spacing: 0.8px;
`;

export const AdditionalInfo = styled.Text`
  flex: 1;
  max-width: 200px;
  font-size: 13px;
`;
