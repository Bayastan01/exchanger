import React, {useState} from 'react'
import AuthProps from './AuthProps'
import {StyleSheet} from 'react-native'

function AuthRegistration() {
  const [type_Input, setType_Input] = useState('Электронная почта')
  const type_input = async (type) => {
    await setType_Input(type)
  }
  const AddUser = (user) => {
    console.log(user)
  }
  return (
    <>
      <AuthProps
        title={type_Input}
        pass={true}
        btnTitle={'Создать аккаунт'}
        type_input={type_input}
        fun={AddUser}
      />
    </>
  )
}

const styles = StyleSheet.create({});

export default AuthRegistration
