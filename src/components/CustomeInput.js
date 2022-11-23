import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const CustomeInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry ? true : false}
      />
    </View>
  );
};

export default CustomeInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#EBEBEB',
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 5,
    elevation:4
  },
  input: {
    fontSize: 18
  },
});
