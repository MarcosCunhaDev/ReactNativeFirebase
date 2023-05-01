import React, {useState, createRef} from 'react';
import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
} from 'react-native';
import {Section, Input, ErrorText, Button, ButtonText} from './styles';
import {useNavigation} from '@react-navigation/native';
import {createUserProfile} from '../../services/auth';

const RegisterScreen = () => {
  const navigation = useNavigation<any>();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errortext, setErrortext] = useState('');

  const emailInputRef = createRef();
  const passwordInputRef = createRef();

  const handleSubmitButton = async () => {
    setErrortext('');
    if (!userName) return console.log('Please fill Name');
    if (!userEmail) return console.log('Please fill Email');
    if (!userPassword) return console.log('Please fill Address');

    await createUserProfile(userEmail, userPassword, userName, navigation);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#307ecc'}}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={{alignItems: 'center'}}></View>
        <KeyboardAvoidingView enabled>
          <Section>
            <Input
              onChangeText={UserName => setUserName(UserName)}
              underlineColorAndroid="#f000"
              placeholder="Enter Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </Section>
          <Section>
            <Input
              onChangeText={UserEmail => setUserEmail(UserEmail)}
              underlineColorAndroid="#f000"
              placeholder="Enter Email"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </Section>
          <Section>
            <Input
              onChangeText={UserPassword => setUserPassword(UserPassword)}
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="#8b9cb5"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </Section>
          {errortext != '' ? <ErrorText> {errortext} </ErrorText> : null}
          <Button activeOpacity={0.5} onPress={handleSubmitButton}>
            <ButtonText>REGISTER</ButtonText>
          </Button>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
