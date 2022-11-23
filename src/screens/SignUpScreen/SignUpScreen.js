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
import {
  CustomeInput,
  CustomButton,
  SocialSignInButtons,
} from '../../components';


const SignUpScreen = (props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onRegisterPressed = () => {
    setUsername(username);
    setPassword(password);
    props.navigation.navigate('ConfirmEmail');
  };
  const onTermsOfUsedPressed = () =>{
    console.warn('Terms of Used');
  }
  const onPrivacyPolicyPressed = () =>{
    console.warn('Privacy Policy Pressed');
  }
  const onSignInPressed = () => {
    // console.warn('Go to Sign In DONE SUCCESSFULLY');
    props.navigation.navigate('SignIn');
  };
  return (
    <ScrollView 
      showsVerticalScrollIndicator= {false}
    >
      <View style={styles.root}>
        <Text style={styles.title}>Create Account</Text>
        <CustomeInput
          placeholder={'Username'}
          value={username}
          setValue={setUsername}
        />
        <CustomeInput
          placeholder={'Email'}
          value={email}
          setValue={setEmail}
        />
        <CustomeInput
          placeholder={'Password'}
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomeInput
          placeholder={'Repeat Password'} 
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />
        <CustomButton title={'Register'} onPress={onRegisterPressed} />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsedPressed}>Terms of Use</Text> and{' '}
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>
        </Text>
        <SocialSignInButtons />
        <CustomButton
          title={`Have an account? Sign In`}
          onPress={onSignInPressed}
          type={'TERIARY'}
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 20,
  },
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});
