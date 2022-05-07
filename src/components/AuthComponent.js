import React, {useContext, useState} from 'react'
import {Alert, StyleSheet} from "react-native";
import AuthProps from './AuthProps'
import {useNavigation} from "@react-navigation/native";
import axios from "axios";
import {GlobalContext} from "../../App";

const AuthComponent = (props) => {
    const [type_Input, setType_Input] = useState('Электронная почта')
    const type_input = async (type) => {
        await setType_Input(type)
    }
    const {navigate} = useNavigation()
    const [loading, setLoading] = useState(false)
    const globalContext = useContext(GlobalContext)

    const SignUser = (data) => {
        setLoading(true)
        axios.post('http://192.168.53.180:5002/api/v1/auth/sign-in', {
            [data.type]: data.user,
            [data.type === 'email' ? 'phone_number' : 'email']: null,
            password: data.user_password
        }).then((response) => {
            console.log(response.data.payload.user.email)
            globalContext.signIn(response.data.payload)
            setLoading(false)
            navigate('HomeScreen')
        }).catch(e => {
            if (e?.response?.data?.status === 'user_not_found') {
                Alert.alert('Ошибка!', 'Пользователь не найден!')
            }
            else if (e?.response?.data?.status === 'wrong_password') {
                Alert.alert('Ошибка!', 'Неверный пароль!')
            }
            console.log(e)
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <>
            <AuthProps
                title={type_Input}
                pass={true}
                loading={loading}
                btnTitle={'Войти'}
                type_input={type_input}
                beginnerScreen={true}
                fun={SignUser}
            />
        </>
    );
};

const styles = StyleSheet.create({});

export default AuthComponent;
