import React, {useContext, useState} from 'react'
import AuthProps from './AuthProps'
import {Alert, StyleSheet, ActivityIndicator} from 'react-native'
import axios from "axios";
import {GlobalContext} from "../../App";

function AuthRegistration() {
    const [type_Input, setType_Input] = useState('Электронная почта')
    const type_input = async (type) => {
        await setType_Input(type)
    }

    const [loading, setLoading] = useState(false)
    const globalContext = useContext(GlobalContext)


    const AddUser = (data) => {
        setLoading(true)
        axios.post('http://192.168.0.102:5002/api/v1/auth/sign-up', {
            [data.type]: data.user,
            [data.type === 'email' ? 'phone_number' : 'email']: null,
            password: data.user_password
        }).then((response) => {
            console.log(response.data.payload.user.email)
            globalContext.signIn(response.data.payload)
        }).catch(e => {
            if (e?.response?.data?.status === 'email_or_phone_number_is_taken') {
                Alert.alert('Ошибка', 'Такой пользователь уже существует!')
            }
        }).finally(() => {
            setLoading(false)
        })
    }


    const AlertRegistor = (data) => {
        Alert.alert(
            "Ваши данные",
            "О нас",
            [
                {
                    text: "Cancel",
                    onPress: () => Alert.alert("Cancel Pressed"),
                    style: "cancel",
                },
            ]
        );
    }


    return (
        <>
            <AuthProps
                title={type_Input}
                pass={true}
                loading={loading}
                btnTitle={'Создать аккаунт'}
                type_input={type_input}
                fun={AddUser}
            />
        </>
    )
}

const styles = StyleSheet.create({});

export default AuthRegistration
