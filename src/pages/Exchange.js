import React, {useState} from 'react'
import {KeyboardAvoidingView, ScrollView, StyleSheet, Text, View} from 'react-native'
import {Paragraph, TextInput, Avatar, Button} from 'react-native-paper'

function Exchange() {
  const [money_$, setMoney_$] = useState(0)
  const [money_$T, setMoney_$T] = useState(0)

  const change_money = () => {
    console.log(money_$ * 81, 'C');
    setMoney_$(0);
    setMoney_$T(0);
    alert('Ваш баланс менял')
  }

  const get_money$ = (money_$ * 81).toFixed(2)
  const get_money$T = (money_$T * 82).toFixed(2)

  return (
    <KeyboardAvoidingView style={{backgroundColor: '#272B34', height: '100%'}}>
        <ScrollView style={styles.scrollView}>
          <Text style={{textAlign: 'center', marginVertical: 20, fontSize: 24, fontWeight: '500', color: '#fff'}}>Обменять</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}>
            <View style={{flexGrow: 12}}>
              <Paragraph style={styles.myParagraph}>Отдаю</Paragraph>
              <TextInput
                placeholderTextColor="black"
                placeholder={`${money_$.toFixed(2)} $`}
                keyboardType="numeric"
                style={styles.myInput}
                value={money_$ + ''}
                onChangeText={sum => setMoney_$(+sum)}
              />
              <Paragraph style={styles.myParagraph}>Баланс    USD 4.02</Paragraph>
            </View>
            <View style={{flexGrow: 1,marginTop: 45}}>
              <Avatar.Image size={70} source={{uri:'https://www.logolynx.com/images/logolynx/40/4058bbdfdec989db5cf34147d4c5dad2.jpeg'}} />
            </View>
          </View>
          <Paragraph style={styles.myParagraph}>Курс    81 </Paragraph>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', marginTop: 10}}>
            <View style={{flexGrow: 12}}>
              <Paragraph style={styles.myParagraph}>Отдаю</Paragraph>
              <TextInput
                placeholderTextColor="black"
                placeholder={`${money_$T.toFixed(2)} $`}
                keyboardType="numeric"
                style={styles.myInput}
                value={money_$T + ''}
                onChangeText={sum => setMoney_$T(+sum)}
              />
              <Paragraph style={styles.myParagraph}>Баланс    USDT 2.02</Paragraph>
            </View>
            <View style={{flexGrow: 1,marginTop: 45}}>
              <Avatar.Image size={70} source={{uri:'https://thumbs.dreamstime.com/b/%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE-%D1%84%D1%83%D1%82%D1%83%D1%80%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5-%D0%BF%D1%80%D0%B8%D0%B2%D1%8F%D0%B7%D1%8B%D0%B2%D0%B0%D0%B5%D1%82-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8E-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-cryptocurrency-187925201.jpg'}} />
            </View>
          </View>
          <Paragraph style={styles.myParagraph}>Курс    82 </Paragraph>
          <Paragraph style={{...styles.myParagraph, marginTop: 30}}>Получаю</Paragraph>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}>
            <View style={{flexGrow: 12}}>
              <TextInput
                placeholderTextColor="black"
                placeholder={`${money_$ > 0 ? get_money$ : get_money$T} С`}
                keyboardType="numeric"
                style={styles.myInput}
              />
            </View>
            <View style={{flexGrow: 1}}>
              <Avatar.Image size={70} source={{uri:'https://www.konstantinbondar.com/wp-content/uploads/2016/07/znak_soma_01a.jpg'}} />
            </View>
          </View>
          <Paragraph style={styles.myParagraph}>Баланс   KGS 500</Paragraph>
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
