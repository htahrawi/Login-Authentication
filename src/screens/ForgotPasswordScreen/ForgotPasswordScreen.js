import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {CustomeInput, CustomButton} from '../../components';

const ForgotPassword = (props) => {
  const [username, setUsername] = useState('');

  const onSendPressed = () => {
    setUsername(username);
    // console.warn('Send  DONE SUCCESSFULLY');
    props.navigation.navigate('NewPassword');
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
          placeholder={'Username'}
          value={username}
          setValue={setUsername}
        />
        <CustomButton title={'Send'} onPress={onSendPressed} />
        <CustomButton
          title={`Back to sign in `}
          onPress={onSignInPressed}
          type={'TERIARY'}
        />
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;

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
