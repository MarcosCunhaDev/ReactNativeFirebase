import auth from '@react-native-firebase/auth';

export const signInWithEmailAndPassword = async (
  email: string,
  password: string,
  navigation: any,
) => {
  try {
    const user = await auth().signInWithEmailAndPassword(email, password);
    if (user) navigation.replace('HomeScreen');
  } catch (error) {
    console.log(error);
    // if (error.code === 'auth/invalid-email') setErrortext(error.message);
    // else if (error.code === 'auth/user-not-found')
    //   setErrortext('No User Found');
    // else {
    //   setErrortext('Please check your email id or password');
    // }
  }
};

export const updateUserProfile = async (
  currentUserName: string,
  navigation: any,
) => {
  try {
    await auth()?.currentUser?.updateProfile({
      displayName: currentUserName,
    });
    navigation.replace('HomeScreen');
  } catch (error) {
    console.log(error);
    console.error(error);
  }
};

export const createUserProfile = async (
  email: string,
  password: string,
  name: string,
  navigation: string,
) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    if (user) {
      console.log('Registration Successful. Please Login to proceed');
      console.log(user);
      await updateUserProfile(name, navigation);
    }
  } catch (error) {
    console.log(error);
    // if (error.code === 'auth/email-already-in-use') {
    //   setErrortext('That email address is already in use!');
    // } else {
    //   setErrortext(error.message);
    // }
  }
};
