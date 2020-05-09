import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-evenly;
  background-color: #8b10ae;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 350px;
`;

export const Card = styled.View`
  flex: 1;
  margin: 0 20px;
  border-radius: 2px;
  background-color: #fff;
  justify-content: space-between;
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
  font-size: 20px;
  color: #777;
`;

export const Description = styled.Text`
  font-size: 34px;
  font-weight: 500;
  letter-spacing: 0.8px;
`;

export const AdditionalInfo = styled.Text`
  flex: 1;
  max-width: 200px;
  font-size: 13px;
`;
