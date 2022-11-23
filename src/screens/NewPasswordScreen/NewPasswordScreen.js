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

const NewPasswordScreen = (props) => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const onSubmitPressed = () => {
    setNewPassword(newPassword);
    // console.warn('Send  DONE SUCCESSFULLY');
    props.navigation.navigate('Home');
  };
  const onSignInPressed = () => {
    // console.warn('Go to Sign In DONE SUCCESSFULLY');
    props.navigation.navigate('SignIn');
  };
  return (
    <ScrollView 
      showsVerticalScrollIndicator= {false}
    >
      <View style={styles.root}>
        <Text style={styles.title}>Reset Your Password</Text>
        <CustomeInput
          placeholder={'Code'}
          value={code}
          setValue={setCode}
        />
        <CustomeInput
          placeholder={'New Password'}
          value={newPassword}
          setValue={setNewPassword}
        />
        <CustomButton title={'Submit'} onPress={onSubmitPressed} />
        <CustomButton
          title={`Back to sign in `}
          onPress={onSignInPressed}
          type={'TERIARY'}
        />
      </View>
    </ScrollView>
  );
};

export default NewPasswordScreen;

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
