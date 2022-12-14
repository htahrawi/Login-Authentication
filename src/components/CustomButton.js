import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, title, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: '#3B71F3',
  },
  container_SECONDARY: {
    borderColor: '#3B71F3',
    borderWidth: 2,
  },
  container_TERIARY: {},
  text: {
    fontWeight: 'bold',
  },
  text_PRIMARY: {
    color: '#fff',
  },
  text_Secondary: {
    color: '#3B71F3',
  },
  text_TERIARY: {
    color: 'gray',
  },
});
