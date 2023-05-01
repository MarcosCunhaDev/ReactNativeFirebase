import React from 'react';
import {ButtonText, ButtonWrapper} from './styles';

export const Button = ({
  text,
  onPress,
}: {
  text: string;
  onPress: () => void;
}) => {
  return (
    <ButtonWrapper activeOpacity={0.5} onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </ButtonWrapper>
  );
};
