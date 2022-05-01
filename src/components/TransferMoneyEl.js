import React, {useState} from 'react'
import {Button, Caption, TextInput} from 'react-native-paper'
import {StyleSheet, Text, View} from 'react-native'

function TransferMoneyEl() {
  const [elNumber, setElNumber] = useState(0)
  const [elSum, setElsum] = useState(0)

  const Send_money = () => {
    console.log(elNumber, elSum)
    alert(elSum > 999 ?`Ваша завязка отправлена Ваш перевод ${elSum}` : `Ошибка минималный сумма 1000`)
    setElNumber(0)
    setElsum(0)
  }
  const con_text = elNumber.length === 16 && elSum.length  > 3 && elSum.length < 7

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
