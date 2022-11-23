import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/logo.jpg';
import {CustomeInput, CustomButton, SocialSignInButtons} from '../../components';

const SignInScreen = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const height = useWindowDimensions().height;
  const width = useWindowDimensions().width;

  const onSignInPressed = () => {
    setUsername(username);
    setPassword(password);
    // USER VALIDATION
    props.navigation.navigate('Home');
  };
  
  const onSignUpPressed = () => {
    // console.warn('Create an account DONE SUCCESSFULLY');
    props.navigation.navigate('SignUp');
  };
  const onForgetPasswordPressed = () => {
    // console.warn('Do you have fish memory ?');
    props.navigation.navigate('ForgotPassword');
  };
  return (
    <ScrollView 
      showsVerticalScrollIndicator= {false}
    >
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.4}]}
          resizeMode="contain"
        />
        <CustomeInput
          placeholder={'Email'}
          value={username}
          setValue={setUsername}
        />
        <CustomeInput
          placeholder={'Password'}
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomButton title={'SIGN IN'} onPress={onSignInPressed} />
        <CustomButton
          title={'Forget Password?'}
          onPress={onForgetPasswordPressed}
          type={'TERIARY'} // after secondary
        />
        <SocialSignInButtons />
        <CustomButton
          title={`Don't have an account? Create one`}
          onPress={onSignUpPressed}
          type={'TERIARY'}
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  logo: {
    width: '60%',
    maxWidth: 300,
    maxHeight: 200,
  },
});
