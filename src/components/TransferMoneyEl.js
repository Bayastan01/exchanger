import React, {useContext, useState} from 'react'
import {Button, Caption, TextInput} from 'react-native-paper'
import {StyleSheet, Text, View} from 'react-native'
import {VERIFICATION_CODE_LENGTH} from '../settings/settings'
import {GlobalContext} from '../../App'
import axios from 'axios'

function TransferMoneyEl() {
  const {user} = useContext(GlobalContext)
  const {token} = useContext(GlobalContext)
  const [elNumber, setElNumber] = useState(0)
  const [elSum, setElsum] = useState(0)
  const [verification_code, setVerificationCode] = useState('');

  const Send_money = () => {
    axios.post('http://192.168.53.180:5002/api/v1/transfer', {
      to: 'elcard',
      sum: elSum,
      requisite: elNumber
    }, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    },).then((response) => {
      console.log(response)
      alert('Ваша завязка отправлена Ваш перевод')
    }).catch((e) => {
      console.log(e)
      alert('Ошибка')
    })
    setElNumber(0)
    setElsum(0)
    setVerificationCode('')
  }

  const con_text = elNumber.length === 16 && elSum.length  > 3 && elSum.length < 7 && verification_code.length === VERIFICATION_CODE_LENGTH

  return (
    <View style={{backgroundColor: '#272B34', height: '100%'}}>
      <View style={styles.bigCorobca}>
        <Text style={{color: '#fff', textAlign: 'center'}}>Ваш баланс</Text>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: '500'}}>{user.balance_kgs}
          <Text style={{color: '#fff', fontSize: 15}}>  KGS</Text></Text>
      </View>
      <View>
        <TextInput
          placeholderTextColor="grey"
          placeholder={`Пополнение карты Элкарт любого банка`}
          keyboardType="numeric"
          style={styles.myInput}
          value={elNumber}
          onChangeText={sum => setElNumber(sum)}
        />
        <TextInput
          placeholderTextColor="grey"
          placeholder={`Сумма KGS`}
          keyboardType="numeric"
          style={styles.myInput}
          value={elSum}
          onChangeText={sum => setElsum(sum)}
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
  bigCorobca: {
    alignItems: 'center',
    marginHorizontal: 30,
    borderRadius: 10,
    marginVertical: 20,
  },
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
});

export default TransferMoneyEl
