import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {Button, Paragraph, TextInput} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'

function AuthProps(props) {
  const [phone_email, setPhone_Email] = useState('')
  const [full_password, setFull_Password] = useState('')
  const [password, setPassword] = useState(props.pass)
  const [beginnerScreen, setBeginnerScreen] = useState(props.beginnerScreen)
  const [status, setStatus] = useState(true)
  const data = {user: phone_email, user_password: full_password}

  const {navigate} = useNavigation()

  return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', marginVertical: 10, justifyContent: 'center'}}>
          <Paragraph
            style={[styles.myBtnEmail, {
              borderColor: props.title === 'Электронная почта' ? 'grey' : 'transparent',
            }]}
            onPress={() => props.type_input('Электронная почта') && setPhone_Email('')}
          >
            Электронная почта
          </Paragraph>
          <Paragraph  style={[styles.myBtnEmailRight, {
            borderColor: props.title === 'Номер телефона' ? 'grey' : 'transparent',
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
            right={<TextInput.Icon name="eye" onPress={() => setStatus(s => !s)}/>}
          />
          : null
        }
        <Button style={styles.myButton} mode="contained" onPress={() => props.fun(data)}>
          {props.btnTitle}
        </Button>
        {beginnerScreen ?
          <>
            <Paragraph style={styles.myParagraph}>Забыли пароль?</Paragraph>
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
    backgroundColor: '#e7e7e7',
    borderWidth: 1,
  },
  myButton: {
    marginHorizontal: 20,
    marginVertical: 20,
    paddingVertical: 5
  },
  myBtnEmailRight: {
    marginHorizontal: 10,
    borderRadius: 3,
    borderWidth: 1,
    borderStyle: 'solid',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#e7e7e7'
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
