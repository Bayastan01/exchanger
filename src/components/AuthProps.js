import React, {useState} from 'react'
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native'
import {Button, Paragraph, Text, TextInput} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'
import {VERIFICATION_CODE_LENGTH} from '../settings/settings'

function AuthProps(props) {
    const [phone_email, setPhone_Email] = useState('kyrgyzstan@gmail.com')
    const [full_password, setFull_Password] = useState('12345')
    const [password, setPassword] = useState(props.pass)
    const [beginnerScreen, setBeginnerScreen] = useState(props.beginnerScreen)
    const [status, setStatus] = useState(true)
    const [verification_code, setVerificationCode] = useState('');
    const data = {user: phone_email, user_password: full_password}

    const {navigate} = useNavigation()

    const con_text = (props.title === 'Электронная почта' ? phone_email.toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) : phone_email.length === 13) && full_password.length > 3 && full_password.length < 10 && verification_code.length === VERIFICATION_CODE_LENGTH


    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    {
                        beginnerScreen
                            ?
                            <Text style={{textAlign: 'center', marginVertical: 20, fontSize: 24}}>Вход в систему</Text>
                            : null
                    }
                    <View style={{flexDirection: 'row', marginVertical: 10, justifyContent: 'center'}}>
                        <Paragraph
                            style={[styles.myBtnEmail, {
                                backgroundColor: props.title === 'Электронная почта' ? '#4662dd' : 'transparent',
                                color: props.title === 'Электронная почта' ? '#fff' : 'black',
                                borderWidth: props.title === 'Электронная почта' ? 1 : 0
                            }]}
                            onPress={() => props.type_input('Электронная почта') && setPhone_Email('')}
                            disabled={props.loading}
                        >
                            Электронная почта
                        </Paragraph>
                        <Paragraph style={[styles.myBtnEmailRight, {
                            backgroundColor: props.title === 'Номер телефона' ? '#4662dd' : 'transparent',
                            color: props.title === 'Номер телефона' ? '#fff' : 'black',
                            borderWidth: props.title === 'Номер телефона' ? 1 : 0
                        }]} onPress={() => props.type_input('Номер телефона') && setPhone_Email('+996')}
                                   disabled={props.loading}
                        >
                            Номер телефона
                        </Paragraph>
                    </View>
                    <TextInput
                        label={props.title}
                        value={phone_email}
                        onChangeText={t => setPhone_Email(t)}
                        style={styles.myInput}
                        disabled={props.loading}

                    />
                    {password ?
                        <TextInput
                            label="Пароль"
                            value={full_password}
                            onChangeText={t => setFull_Password(t)}
                            style={styles.myInput}
                            secureTextEntry={status}
                            right={<TextInput.Icon disabled={props.loading} name={status ? 'eye-off' : 'eye'}
                                                   onPress={() => setStatus(s => !s)}/>}
                            disabled={props.loading}
                        />
                        : null
                    }
                    <TextInput
                        label="Код"
                        value={verification_code}
                        onChangeText={t => setVerificationCode(t)}
                        style={styles.myInput}
                        keyboardType="numeric"
                        disabled={props.loading}
                    />
                    <Button
                        style={styles.myButton}
                        mode="contained"
                        onPress={() => props.fun({
                            ...data,
                            type: props.title === 'Электронная почта' ? 'email' : 'phone_number'
                        })}
                        disabled={!con_text || props.loading}
                        loading={props.loading}
                    >
                        {props.btnTitle}
                    </Button>
                    {beginnerScreen ?
                        <>
                            <Paragraph style={styles.myParagraph} onPress={() => navigate('AuthForgotPass')}>Забыли
                                пароль?</Paragraph>
                            <Paragraph style={styles.myParagraph}
                                       onPress={() => navigate('AuthRegistrationScreen')}>Зарегистрироваться</Paragraph>
                        </>
                        : null
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    myBtnEmail: {
        marginHorizontal: 10,
        borderRadius: 3,
        borderStyle: 'solid',
        paddingHorizontal: 10,
        borderColor: 'blue',
        paddingVertical: 5,
        borderWidth: 1,
    },
    myButton: {
        marginHorizontal: 20,
        marginVertical: 20,
        paddingVertical: 5,
    },
    myBtnEmailRight: {
        marginHorizontal: 10,
        borderRadius: 3,
        borderColor: 'blue',
        borderStyle: 'solid',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    myInput: {
        height: 50,
        marginVertical: 20,
        marginHorizontal: 20
    },
    container: {
        flex: 1,
        marginTop: 20,
        height: '100%'
    },
    myText: {
        marginHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 24,
        color: 'black',
        marginVertical: 20
    },
    myParagraph: {
        marginHorizontal: 20,
        marginVertical: 10,
    }
});

export default AuthProps
