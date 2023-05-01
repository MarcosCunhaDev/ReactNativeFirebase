import React from 'react';
import {InputWrapper} from './styles';

function InputText() {
  return (
    <InputWrapper
      onChangeText={UserEmail => setUserEmail(UserEmail)}
      placeholder="Enter Email"
      placeholderTextColor="#8b9cb5"
      autoCapitalize="none"
      keyboardType="email-address"
      returnKeyType="next"
      // onSubmitEditing={() =>
      //   passwordInputRef.current && passwordInputRef.current.focus()
      // }
      underlineColorAndroid="#f000"
      blurOnSubmit={false}
    />
  );
}

export default InputText;
