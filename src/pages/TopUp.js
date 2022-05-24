import React, {useContext, useEffect, useState} from 'react'
import {Button, TextInput} from 'react-native-paper'
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native'
import {API_URL, VERIFICATION_CODE_LENGTH} from '../settings/settings'
import {GlobalContext} from '../../App'
import axios from 'axios'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

function TopUp() {
  const {user, token, setUser} = useContext(GlobalContext)
  const [address, setAddress] = useState(0)
  const [email_key, setEmail_key] = useState(true);
  const [sum, setSum] = useState(0)
  const [image, setImage] = useState([])
  const [well$T, setWell$T] = useState(0)
  const [refreshing, setRefreshing] = useState(false);
  const [commission, setCommission] = useState(1.5)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    axios.get(API_URL + '/api/v1/exchange', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
      .then((data) => {
        setWell$T(data.data.payload.rate_usdt)
        console.log(data)
      })
      .catch((e) => {
        console.log(e)
      })
      .finally(() => {
        setRefreshing(false)
      })
  }, []);

  const Send_money = () => {
    axios.post(API_URL + '/api/v1/transfer', {
      address: address,
      usdt: sum,
      sum: get_money,
      check_image: image
    }, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    },).then((response) => {
      console.log(response)
      setUser(response.data.payload.user)
    }).catch((e) => {
      console.log(e)
      alert('Ошибка')
    })
  }

  useEffect(() => {
    well()
  }, [user])

  const well = () => {
    axios.get(API_URL + '/api/v1/exchange', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
      .then((data) => {
        setWell$T(data.data.payload.rate_usdt)
        console.log(data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const AddImage = () => {
  new Promise(resolve => {
      NativeModules.ImagePickerManager.launchImageLibrary(
        (result: ImagePickerResponse) => {
          if(callback) callback(result);
          resolve(result);
        },
      );
    })
  }

  const con_text = address.length === 16 && sum.length  > 3 && sum.length < 6 && verification_code.length === VERIFICATION_CODE_LENGTH
  const get_com_money = (sum * well$T) * commission / 100
  const get_money = sum * well$T + get_com_money

  return (
    <ScrollView
      style={{backgroundColor: '#272B34', height: '100%'}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <View style={styles.bigCorobca}>
        <Text style={{color: '#fff', textAlign: 'center'}}>Наш карты</Text>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: '500'}}>Элкарт 9417447788453424</Text>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: '500'}}>МБанк +996507210990</Text>
      </View>
      <View>
        <TextInput
          placeholderTextColor="grey"
          placeholder={`Пополнение binance trc20 адресь`}
          keyboardType="text"
          style={styles.myInput}
          value={address}
          onChangeText={sum => setAddress(sum)}
        />
        <TextInput
          placeholderTextColor="grey"
          placeholder={`USDT`}
          keyboardType="numeric"
          style={styles.myInput}
          value={sum}
          onChangeText={sum => setSum(sum)}
        />
        <Text style={{color: '#fff', marginHorizontal: 15, fontWeight: '800', fontSize: 20,}}>
          Итоги вы заплатите {get_money} Сом
        </Text>
        <Text style={{color: '#cbc9c9', marginHorizontal: 15, fontSize: 15, marginVertical: 5}}>
          Коммиссия {commission}% или {get_com_money} Сом
        </Text>
        <View style={styles.textinput}>
          <TextInput
            style={styles.input}
            mode='outlined'
            activeOutlineColor='green'
            outlineColor="#3f51b5"
            disabled={true}
            dense={true}
            value={'cкрин счет пополнениям фото'}
          />
          {email_key ? (
            <Ionicons
              style={styles.pencil}
              name='pencil'
              color={'#3f51b5'}
              size={27}
              onPress={() => AddImage()}/>
          ) : (
            <Entypo
              style={styles.pencil}
              name='check'
              color={'green'}
              size={27}
              onPress={() => setEmail_key(true)}/>
          )}
        </View>
        <Button
          style={styles.myButton}
          mode="contained"
          disabled={!con_text}
          onPress={() => Send_money()}
        >
          Отправить заявку
        </Button>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  textinput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    marginRight: 20
  },
  input: {
    width: '90%',
    height: 50,
    marginHorizontal: 15,
    marginVertical: 15,
  },
  pencil: {
    marginTop: 30,
  },
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
    backgroundColor: 'blue',
  },
  myInput: {
    backgroundColor: 'white',
    height: 50,
    width: '90%',
    marginHorizontal: 15,
    marginVertical: 15,
    lineHeight: 20,
    fontSize: 15
  },
});

export default TopUp

