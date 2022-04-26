import React from 'react'
import AuthProps from './AuthProps'
import {Button} from 'react-native-paper'
import {StyleSheet} from 'react-native'

function AuthRegistration() {
  return (
    <>
      <AuthProps email={'Электронная почта'} pass={true}/>
      <Button style={styles.myButton} mode="contained" onPress={() => console.log('Pressed')}>
        Войти
      </Button>
    </>
  )
}

const styles = StyleSheet.create({
  myButton: {
    marginHorizontal: 20,
    marginVertical: 30,
    paddingVertical: 5
  },
});

export default AuthRegistration
