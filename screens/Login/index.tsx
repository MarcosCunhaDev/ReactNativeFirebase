import React, {useState, createRef} from 'react';
import {View, ScrollView, Keyboard, KeyboardAvoidingView} from 'react-native';
import * as s from './styles';
import {useNavigation} from '@react-navigation/native';
import {signInWithEmailAndPassword} from '../../services/auth';

const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

  const handleSubmitPress = async () => {
    setErrortext('');
    if (!userEmail) {
      return console.log('Please fill Email');
    }
    if (!userPassword) {
      return console.log('Please fill Password');
    }
    await signInWithEmailAndPassword(userEmail, userPassword, navigation);
  };

  return (
    <s.MainBody>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}></View>
            <s.Section>
              <s.Input
                onChangeText={UserEmail => setUserEmail(UserEmail)}
                placeholder="Enter Email"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </s.Section>
            <s.Section>
              <s.Input
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                placeholder="Enter Password"
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </s.Section>
            {errortext != '' ? <s.ErrorText> {errortext} </s.ErrorText> : null}
            <s.Button activeOpacity={0.5} onPress={handleSubmitPress}>
              <s.ButtonText>LOGIN</s.ButtonText>
            </s.Button>
            <s.RegisterText
              onPress={() => navigation.navigate('RegisterScreen')}>
              New Here ? Register
            </s.RegisterText>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </s.MainBody>
  );
};
export default LoginScreen;
