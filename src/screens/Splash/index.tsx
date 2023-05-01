import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {Container, ActivityIndicator} from './styles';

import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@components/Button';

const SplashScreen = () => {
  const navigation = useNavigation<any>();
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      // Check if currentUser is set or not
      // If not then send for Authentication
      // else send to Home Screen
      navigation.replace(auth().currentUser ? 'HomeScreen' : 'Auth');
    }, 5000);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#307ecc'}}>
      <Container>
        <ActivityIndicator animating={animating} color="#FFFFFF" size="large" />
      </Container>
    </SafeAreaView>
  );
};

export default SplashScreen;
