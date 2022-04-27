import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {Button, Paragraph, Text, TextInput} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'

function AuthProps(props) {
  const [phone_email, setPhone_Email] = useState('')
  const [full_password, setFull_Password] = useState('')
  const [password, setPassword] = useState(props.pass)
  const [beginnerScreen, setBeginnerScreen] = useState(props.beginnerScreen)
  const [status, setStatus] = useState(true)
  const data = {user: phone_email, user_password: full_password}

  const {navigate} = useNavigation()

  const con_text = (props.title === 'Электронная почта' ? phone_email.toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) : phone_email.length === 13) && full_password.length > 3 && full_password.length < 10


  return (
      <View style={styles.container}>
        {
          beginnerScreen
              ? <Text style={{textAlign: 'center', marginVertical: 20, fontSize: 24}}>Вход в систему</Text>
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
          >
            Электронная почта
          </Paragraph>
          <Paragraph  style={[styles.myBtnEmailRight, {
            backgroundColor: props.title === 'Номер телефона' ? '#4662dd' : 'transparent',
            color: props.title === 'Номер телефона' ? '#fff' : 'black',
            borderWidth: props.title === 'Номер телефона' ? 1 : 0
          }]} onPress={() => props.type_input('Номер телефона') && setPhone_Email('+996')}>
            Номер телефона
          </Paragraph>
        </View>
        <TextInput
          label={props.title}
          value={phone_email}
          onChangeText={t => setPhone_Email(t)}
          style={styles.myInput}
        />
        {password ?
          <TextInput
            label="Пароль"
            value={full_password}
            onChangeText={t => setFull_Password(t)}
            style={styles.myInput}
            secureTextEntry={status}
            right={<TextInput.Icon   name={status ? 'eye-off' : 'eye'} onPress={() => setStatus(s => !s)}/>}
          />
          : null
        }
        <Button
          style={styles.myButton}
          mode="contained"
          onPress={() => props.fun(data)}
          disabled={!con_text}
        >
          {props.btnTitle}
        </Button>
        {beginnerScreen ?
          <>
            <Paragraph style={styles.myParagraph} onPress={() => navigate('AuthForgotPass')}>Забыли пароль?</Paragraph>
            <Paragraph style={styles.myParagraph} onPress={() => navigate('AuthRegistrationScreen')}>Зарегистрироваться</Paragraph>
          </>
          : null
        }
      </View>
  )
}

const styles = StyleSheet.create({
  myBtnEmail: {
    marginHorizontal: 10,
    borderRadius: 3,
    borderStyle: 'solid',
    paddingHorizontal: 10,
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
    borderWidth: 1,
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
    marginTop: 20
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
