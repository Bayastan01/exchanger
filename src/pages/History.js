import React from 'react'
import {View, FlatList, StyleSheet, Text,} from 'react-native';
import {Avatar, Caption, Paragraph} from 'react-native-paper'

function History() {

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

  return (
    <View style={{backgroundColor: '#272B34', height: '100%'}}>
      <Caption style={{
        ...styles.title,
        marginVertical: 20,
        marginHorizontal: 20
      }}>28 AПРЕЛЯ</Caption>
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
              <Text style={styles.title}>- {item.price} Cом</Text>
            </View>
          </View>
        </>
      )}
      />
    </View>
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
