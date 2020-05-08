import styled from 'styled-components/native';

export const Container = styled.View``;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 10,
    paddingRight: 20,
  },
})``;

export const TabItem = styled.View`
  justify-content: space-between;
  margin-left: 10px;
  padding: 5px;
  height: 100px;
  width: 100px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const TabText = styled.Text`
  font-size: 12px;
  color: #fff;
`;
