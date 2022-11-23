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
import {CustomeInput, CustomButton} from '../../components';

const ConfirmEmailScreen = (props) => {
  const [code, setCode] = useState('');

  const onConfirmPressed = () => {
    setCode(code);
    // console.warn('Register DONE SUCCESSFULLY');
    props.navigation.navigate('Home');
  };
  const onSignInPressed = () => {
    // console.warn('Go to Sign In DONE SUCCESSFULLY');
    props.navigation.navigate('SignIn');
  };
  const onResendPressed = () => {
    console.warn('Resend Code DONE SUCCESSFULLY');
  };
  return (
    <ScrollView 
      showsVerticalScrollIndicator= {false}
    >
      <View style={styles.root}>
        <Text style={styles.title}>Confirm Your Email</Text>
        <CustomeInput
          placeholder={'Enter your confirmation code'}
          value={code}
          setValue={setCode}
        />
        <CustomButton title={'Confirm'} onPress={onConfirmPressed} />
        <CustomButton
          title={`Resend code`}
          onPress={onResendPressed}
          type={'SECONDARY'}
        />
        <CustomButton
          title={`Back to sign in `}
          onPress={onSignInPressed}
          type={'TERIARY'}
        />
      </View>
    </ScrollView>
  );
};

export default ConfirmEmailScreen;

const styles = StyleSheet.create({
  title:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 20
  },
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  text:{
    color: 'gray',
    marginVertical: 10,
  },
  link:{
    color: '#FDB075'
  }
});
