import React, {useState} from 'react'
import {KeyboardAvoidingView, ScrollView, StyleSheet, Text, View} from 'react-native'
import {Paragraph, TextInput, Avatar, Button} from 'react-native-paper'

function Exchange() {
  const [money_$, setMoney_$] = useState(0)

  const change_money = () => {
    console.log(money_$ * 81, 'C');
    setMoney_$(0);
    alert('Ваш баланс менял')
  }

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
              <Paragraph style={styles.myParagraph}>Баланс    $4.02</Paragraph>
            </View>
            <View style={{flexGrow: 1,marginTop: 45}}>
              <Avatar.Image size={70} source={{uri:'https://www.logolynx.com/images/logolynx/40/4058bbdfdec989db5cf34147d4c5dad2.jpeg'}} />
            </View>
          </View>
          <Paragraph style={styles.myParagraph}>Курс    81 </Paragraph>
          <Paragraph style={{...styles.myParagraph, marginTop: 30}}>Получаю</Paragraph>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}>
            <View style={{flexGrow: 12}}>
              <TextInput
                placeholderTextColor="black"
                placeholder={`${(money_$ * 81).toFixed(2)} C`}
                keyboardType="numeric"
                style={styles.myInput}
              />
            </View>
            <View style={{flexGrow: 1}}>
              <Avatar.Image size={70} source={{uri:'https://www.konstantinbondar.com/wp-content/uploads/2016/07/znak_soma_01a.jpg'}} />
            </View>
          </View>
          <Paragraph style={styles.myParagraph}>Баланс   0</Paragraph>
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
    fontSize: 16,
    fontWeightL: '500',
    marginHorizontal: 20,
    marginVertical: 5,
  },
  myInput: {
    backgroundColor: 'white',
    height: 80,
    width: '90%',
    marginHorizontal: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginVertical: 5,
    lineHeight: 50,
    fontSize: 30
  },
})

export default Exchange;
