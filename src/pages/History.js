import React, {useContext, useEffect, useState} from 'react'
import {View, FlatList, StyleSheet, Text, ScrollView} from 'react-native'
import {Avatar, Caption, Paragraph} from 'react-native-paper'
import moment from 'moment'
import axios from 'axios'
import {GlobalContext} from '../../App'
import 'moment/locale/ru'

moment.locale('ru')

function History() {
  const {token} = useContext(GlobalContext)
  const [history_, setHistory_] = useState([])

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      date: '28.04.2022',
      img: 'https://static.qiwi.com/img/providers/logoBig/31851_l.png',
      title: 'Элкарт пополнение',
      price: 2000
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      img: 'https://static.qiwi.com/img/providers/logoBig/31851_l.png',
      title: 'Элкарт пополнение',
      price: 100
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      img: 'https://static.qiwi.com/img/providers/logoBig/31851_l.png',
      title: 'Элкарт пополнение',
      price: 150
    },
  ];

  useEffect(() => {
    history()
  }, [])

  const history = () => {
    axios.get('http://192.168.53.180:5002/api/v1/exchange/history', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
      .then((data) => {
        console.log(data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <ScrollView style={{backgroundColor: '#272B34', height: '100%'}}>
      <Caption style={{...styles.title, marginVertical: 20, marginHorizontal: 20}}>
        {moment().format('LL')}
      </Caption>
      <FlatList
      data={DATA}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <>
          <View style={styles.item}>
            <View style={{flexGrow: 1}}>
              <Avatar.Image size={60} source={{uri:`${item.img}`}} />
            </View>
            <View style={{flexGrow: 5}}>
              <Paragraph style={styles.title}>{item.title}</Paragraph>
            </View>
            <View style={{flexGrow: 1}}>
              <Text style={styles.title} onPress={() => history()}>+ {item.price} Cом</Text>
            </View>
          </View>
        </>
      )}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
    marginHorizontal: 5,
    marginVertical: 1
  },
  title: {
    color: '#fff',
    marginHorizontal: 4,
    fontSize: 16,
  },
});


export default History
