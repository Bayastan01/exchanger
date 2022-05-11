import React, {useContext, useEffect, useState} from 'react'
import {KeyboardAvoidingView, RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native'
import {Paragraph, TextInput, Avatar, Button} from 'react-native-paper'
import {GlobalContext} from '../../App'
import axios from 'axios'

function Exchange() {
  const {user} = useContext(GlobalContext)
  const {token, setUser} = useContext(GlobalContext)
  const [refreshing, setRefreshing] = useState(false);

  const [well$, setWell$] = useState(0)
  const [well$T, setWell$T] = useState(0)

  const [money_$, setMoney_$] = useState(0)
  const [money_$T, setMoney_$T] = useState(0)

  const [tmoney_$, setTmoney_$] = useState('')
  const [tmoney_$T, setTmoney_$T] = useState('')

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    axios.get('http://192.168.0.102:5002/api/v1/auth/me', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
      .then((data) => {
        setUser(data.data.payload.user)
      })
      .catch((e) => {
        console.log(e)
      })
      .finally(() => {
        setRefreshing(false)
      })
  }, []);

  const change_money = () => {
    axios.post('http://192.168.0.102:5002/api/v1/exchange', {
      currency: money_$ > 0 ? 'usd' : 'usdt',
      amount: money_$ > 0 ? money_$ : money_$T
    }, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    },).then((response) => {
      console.log(response)
      setUser(response.data.payload.user)
      alert('Ваш баланс менял')
      setTmoney_$(0)
      setTmoney_$T(0)
    }).catch((e) => {
      console.log(e)
    })
  }

  useEffect(() => {
    well()
  }, [user])

  const well = () => {
   axios.get('http://192.168.0.102:5002/api/v1/exchange', {
     headers: {
       'Authorization': `Bearer ${token}`,
     }
   })
   .then((data) => {
     setWell$(data.data.payload.rate_usd)
     setWell$T(data.data.payload.rate_usdt)
        console.log(data.data.payload)
      })
     .catch((e) => {
       console.log(e)
     })
  }

  const get_money$ = (tmoney_$ * well$).toFixed(2)
  const get_money$T = (tmoney_$T * well$T).toFixed(2)

  useEffect(() => {
    const t = +tmoney_$
    if (tmoney_$ === '') {
      setMoney_$(0)
    } else if (!isNaN(t)) {
      setMoney_$(t)
    }
  }, [tmoney_$])

  useEffect(() => {
    const t = +tmoney_$T
    if (tmoney_$T === '') {
      setMoney_$T(0)
    } else if (!isNaN(t)) {
      setMoney_$T(t)
    }
  }, [tmoney_$T])

  return (
    <KeyboardAvoidingView style={{backgroundColor: '#272B34', height: '100%'}}>
        <ScrollView
          style={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
          <Text style={{textAlign: 'center', marginVertical: 20, fontSize: 24, fontWeight: '500', color: '#fff'}}>Обменять</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}>
            <View style={{flexGrow: 12}}>
              <Paragraph style={styles.myParagraph}>Отдаю</Paragraph>
              <TextInput
                placeholderTextColor="black"
                placeholder={`${money_$.toFixed(2)} $`}
                keyboardType="numeric"
                style={styles.myInput}
                disabled={tmoney_$T}
                value={tmoney_$}
                onChangeText={sum => setTmoney_$(sum)}
              />
              <Paragraph style={styles.myParagraph}>Баланс {user.balance_usd} USD</Paragraph>
            </View>
            <View style={{flexGrow: 1,marginTop: 45}}>
              <Avatar.Image size={70} source={{uri:'https://www.logolynx.com/images/logolynx/40/4058bbdfdec989db5cf34147d4c5dad2.jpeg'}} />
            </View>
          </View>
          <Paragraph style={styles.myParagraph}>Курс    {well$} </Paragraph>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', marginTop: 10}}>
            <View style={{flexGrow: 12}}>
              <Paragraph style={styles.myParagraph}>Отдаю</Paragraph>
              <TextInput
                placeholderTextColor="black"
                placeholder={`${money_$T.toFixed(2)} $`}
                keyboardType="numeric"
                disabled={tmoney_$}
                style={styles.myInput}
                value={tmoney_$T}
                onChangeText={sum => setTmoney_$T(sum)}
              />
              <Paragraph style={styles.myParagraph}>Баланс {user.balance_usdt} USDT</Paragraph>
            </View>
            <View style={{flexGrow: 1,marginTop: 45}}>
              <Avatar.Image size={70} source={{uri:'https://thumbs.dreamstime.com/b/%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE-%D1%84%D1%83%D1%82%D1%83%D1%80%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5-%D0%BF%D1%80%D0%B8%D0%B2%D1%8F%D0%B7%D1%8B%D0%B2%D0%B0%D0%B5%D1%82-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8E-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-cryptocurrency-187925201.jpg'}} />
            </View>
          </View>
          <Paragraph style={styles.myParagraph}>Курс    {well$T} </Paragraph>
          <Paragraph style={{...styles.myParagraph, marginTop: 30}}>Получаю</Paragraph>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}>
            <View style={{flexGrow: 12}}>
              <TextInput
                placeholderTextColor="black"
                disabled={true}
                placeholder={`${tmoney_$ > 0 ? get_money$ : get_money$T} С`}
                keyboardType="numeric"
                style={styles.myInput}
              />
            </View>
            <View style={{flexGrow: 1}}>
              <Avatar.Image size={70} source={{uri:'https://www.konstantinbondar.com/wp-content/uploads/2016/07/znak_soma_01a.jpg'}} />
            </View>
          </View>
          <Paragraph style={styles.myParagraph}>Баланс {user.balance_kgs}</Paragraph>
          <Button
            style={styles.myButton}
            mode="contained"
            onPress={() => change_money()}
          >
            Обменять
          </Button>
        </ScrollView>
    </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 5,
  },
  myButton: {
    marginHorizontal: 20,
    marginVertical: 20,
    paddingVertical: 5,
  },
  myParagraph: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
    marginHorizontal: 20,
    marginVertical: 5,
  },
  myInput: {
    backgroundColor: 'white',
    height: 60,
    width: '90%',
    marginHorizontal: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginVertical: 5,
    lineHeight: 30,
    fontSize: 25
  },
})

export default Exchange;
