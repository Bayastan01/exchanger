import React, {useState} from 'react'
import {StyleSheet} from "react-native";
import AuthProps from './AuthProps'

const AuthComponent = () => {
    const [type_Input, setType_Input] = useState('Электронная почта')
    const type_input = async (type) => {
        await setType_Input(type)
    }
    const SignUser = (user) => {
    console.log(user)
    }
    return (
      <>
          <AuthProps
            title={type_Input}
            pass={true}
            btnTitle={'Войти'}
            type_input={type_input}
            beginnerScreen={true}
            fun={SignUser}
          />
      </>
    );
};

const styles = StyleSheet.create({
});

export default AuthComponent;
