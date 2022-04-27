import React, {useState} from 'react'
import {StyleSheet} from "react-native";
import AuthProps from './AuthProps'
import {useNavigation} from "@react-navigation/native";

const AuthComponent = () => {
    const [type_Input, setType_Input] = useState('Электронная почта')
    const type_input = async (type) => {
        await setType_Input(type)
    }
    const {navigate} = useNavigation()

    const SignUser = (user) => {
    navigate('HomeScreen')
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
