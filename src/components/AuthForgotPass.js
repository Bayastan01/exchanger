import React, {useState} from 'react';
import {StyleSheet,View} from 'react-native'
import AuthProps from "./AuthProps";


const AuthForgotPass = () => {
    const [type_Input, setType_Input] = useState('Электронная почта')
    const type_input = async (type) => {
        await setType_Input(type)
    }
    const AddPass = (user) => {
        console.log(user)
    }
    return (
        <>
            <AuthProps
                title={type_Input}
                pass={false}
                btnTitle={'Далее'}
                type_input = {type_input}
                fun={AddPass}
            />
        </>
    );
};

const styles = StyleSheet.create({});

export default AuthForgotPass;
