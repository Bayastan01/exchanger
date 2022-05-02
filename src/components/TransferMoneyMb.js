import React, {useState} from 'react'
import {Button, Caption, TextInput} from 'react-native-paper'
import {StyleSheet, Text, View} from 'react-native'
import {VERIFICATION_CODE_LENGTH} from '../settings/settings'

function TransferMoneyMb() {
  const [mbNumber, setMbNumber] = useState(0)
  const [mbSum, setMbsum] = useState(0)
  const [verification_code, setVerificationCode] = useState('');

  const Send_money = () => {
    console.log(mbNumber, mbSum)
    alert(mbSum > 999 ?`Ваша завязка отправлена Ваш перевод ${mbSum}` : `Ошибка минималный сумма 1000`)
    setMbNumber(0)
    setMbsum(0)
    setVerificationCode('')
  }
  const con_text = mbNumber.length === 10 && mbSum.length  > 3 && mbSum.length < 7 && verification_code.length === VERIFICATION_CODE_LENGTH

  return (
    <View style={{backgroundColor: '#272B34', height: '100%'}}>
      <View style={styles.bigCorobca}>
        <Text style={{color: '#fff', textAlign: 'center'}}>Ваш баланс</Text>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: '500'}}>3305,45
          <Text style={{color: '#fff', fontSize: 15}}>  KGS</Text></Text>
      </View>
      <View>
        <TextInput
          placeholderTextColor="grey"
          placeholder={`Введите лицевой счет`}
          keyboardType="numeric"
          style={styles.myInput}
          value={mbNumber}
          onChangeText={sum => setMbNumber(sum)}
        />
        <TextInput
          placeholderTextColor="grey"
          placeholder={`Сумма KGS`}
          keyboardType="numeric"
          style={styles.myInput}
          value={mbSum}
          onChangeText={sum => setMbsum(sum)}
        />
        <TextInput
          label="Код"
          value={verification_code}
          keyboardType="numeric"
          onChangeText={t => setVerificationCode(t)}
          style={styles.myInput}
        />
        <Button
          style={styles.myButton}
          mode="contained"
          disabled={!con_text}
          onPress={() => Send_money()}
        >
          Отправить заявку
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    marginHorizontal: 4,
    fontSize: 16,
  },
  myButton: {
    marginHorizontal: 20,
    marginVertical: 20,
    paddingVertical: 5,
  },
  myInput: {
    backgroundColor: 'white',
    height: 50,
    width: '90%',
    marginHorizontal: 15,
    marginVertical: 5,
    lineHeight: 20,
    fontSize: 15
  },
  bigCorobca: {
    marginVertical: 20,
    alignItems: 'center',
    marginHorizontal: 30,
    borderRadius: 10,
  },
});

export default TransferMoneyMb
