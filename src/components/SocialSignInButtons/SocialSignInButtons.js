import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton';

const SocialSignInButtons = () => {
    const onSignInGoogle = () => {
        console.warn('SIGNIN Google DONE SUCCESSFULLY');
    };
    const onSignInFacebook = () => {
        console.warn('SIGNIN Facebook DONE SUCCESSFULLY');
    };
    const onSignInApple = () => {
        console.warn('SIGNIN Apple DONE SUCCESSFULLY');
    };

    return (
        <>
            <CustomButton
                title={'SIGN IN WITH GOOGLE'}
                onPress={onSignInGoogle}
                bgColor={'#Eff7EAF4'}
                fgColor={'#4765A9'}
            />
            <CustomButton
                title={'SIGN IN WITH FACEBOOK'}
                onPress={onSignInFacebook}
                bgColor={'#FAE9EA'}
                fgColor={'#DD4D44'}
            />
            <CustomButton
                title={'SIGN IN WITH APPLE'}
                onPress={onSignInApple}
                bgColor={'#e3e3e3'}
                fgColor={'#363636'}
            />
        </>
    );
};

export default SocialSignInButtons;

const styles = StyleSheet.create({});
