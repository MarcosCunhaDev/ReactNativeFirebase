import { TouchableOpacity, Text } from 'react-native/types';
import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  min-width: 300px;
  background-color: #7de24e;
  border-width: 0;
  color: #ffffff;
  border-color: #7de24e;
  height: 40px;
  align-items: center;
  border-radius: 30px;
  margin-left: 35px;
  margin-right: 35px;
  margin-top: 20px;
  margin-bottom: 25px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  padding-left: 10px;
  padding-bottom: 10px;
  font-size: 16px;
`;
