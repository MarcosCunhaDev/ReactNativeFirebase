import styled from 'styled-components/native';

export const Section = styled.View`
  flex-direction: row;
  height: 40px;
  margin-top: 20px;
  margin-left: 35px;
  margin-right: 35px;
  margin: 10px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #7de24e;
  border-width: 0px;
  color: #ffffff;
  border-color: #7de24e;
  height: 40px;
  align-items: center;
  border-radius: 30px;
  margin-left: 35px;
  margin-right: 35px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  /* padding-vertical: 10px; */
  font-size: 16px;
`;

export const Input = styled.TextInput`
  flex: 1;
  color: white;
  padding-left: 15px;
  padding-right: 15px;
  border-width: 1px;
  border-radius: 30px;
  border-color: #dadae8;
`;

export const ErrorText = styled.Text`
  color: red;
  text-align: center;
  font-size: 14px;
`;
