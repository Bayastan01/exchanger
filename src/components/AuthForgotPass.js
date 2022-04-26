import React from 'react';
import {StyleSheet,View} from 'react-native'
import AuthProps from "./AuthProps";
import {Button} from "react-native-paper";

const AuthForgotPass = () => {
    return (
        <>
            <AuthProps pass={false} email={'Электронная почта'}/>
            <Button style={styles.BtnEmail} mode="contained">Далее</Button>
        </>
    );
};

const styles = StyleSheet.create({
    BtnEmail: {
        marginVertical: 20,
        marginHorizontal: 20
    }
});

export default AuthForgotPass;
