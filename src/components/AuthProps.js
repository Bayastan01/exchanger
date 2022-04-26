import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {Paragraph, TextInput} from 'react-native-paper'

function AuthProps(props) {
  const [password, setPassword] = useState(props.pass)
  return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', marginVertical: 10, justifyContent: 'center'}}>
          <Paragraph  style={styles.myBtnEmail}>
            Электронная почта
          </Paragraph>
          <Paragraph  style={styles.myBtnEmailRight}>
            Номер телефона
          </Paragraph>
        </View>
        <TextInput
          label={props.email || props.number}
          // value={full_name}
          // onChangeText={t => setFullName(t)}
          style={styles.myInput}
        />
        {password ?
          <TextInput
            label="Пароль"
            // value={phone_number}
            // keyboardType={'phone-pad'}
            // onChangeText={t => setPhoneNumber(t)}
            style={styles.myInput}
            secureTextEntry
            right={<TextInput.Icon name="eye" />}
          />
          : null
        }
      </View>
  )
}

const styles = StyleSheet.create({
  myBtnEmail: {
    marginHorizontal: 10,
    borderColor: 'grey',
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#e7e7e7'
  },
  myBtnEmailRight: {
    marginHorizontal: 10,
    borderColor: 'grey',
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#e7e7e7'
  },
  container: {
    flex: 1,
    marginTop: 20
  },
  myInput: {
    height: 50,
    marginVertical: 20,
    marginHorizontal: 20
  },
  myParagraph: {
    marginHorizontal: 20,
    marginVertical: 10,
  }
});

export default AuthProps
