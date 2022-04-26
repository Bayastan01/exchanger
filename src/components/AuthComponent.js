import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Button, Paragraph, TextInput} from "react-native-paper";

const AuthComponent = () => {
    return (
        <View style={styles.container}>
           <View style={{flexDirection: 'row', marginVertical: 10, justifyContent: 'center'}}>
               <Paragraph  style={styles.myBtnEmail}>
                   Электронная почта
               </Paragraph>
               <Paragraph  style={styles.myBtnEmailRight}>
           <View style={{flexDirection: 'row'}}>
               <Button compact={false} mode="default" style={styles.myBtnEmail}>
                   Электронная почта
               </Button>
               <Button mode="default" style={styles.myBtnEmailRight}>
                   Номер телефона
               </Paragraph>
           </View>
            <TextInput
                label="Электронная почта"
                // value={full_name}
                // onChangeText={t => setFullName(t)}
                style={styles.myInput}
            />
            <TextInput
                label="Пароль"
                // value={phone_number}
                // keyboardType={'phone-pad'}
                // onChangeText={t => setPhoneNumber(t)}
                style={styles.myInput}
                secureTextEntry
                right={<TextInput.Icon name="eye" />}
            />
            <Button style={styles.myButton} mode="contained" onPress={() => console.log('Pressed')}>
                Войти
            </Button>
            <Paragraph style={styles.myParagraph}>Забыли пароль?</Paragraph>
            <Paragraph style={styles.myParagraph}>Зарегистрироваться</Paragraph>
        </View>
    );
};

const styles = StyleSheet.create({
    myBtnEmail: {
        marginHorizontal: 10,
        borderColor: 'grey',
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#e7e7e7'
    },
    myBtnEmailRight: {
        marginHorizontal: 10,
        borderColor: 'grey',
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#e7e7e7'
    },
    container: {
      marginTop: 20,
      flex: 1,
    },
    myInput: {
        height: 50,
        marginVertical: 20,
        marginHorizontal: 20
    },
    myButton: {
        marginHorizontal: 20,
        marginVertical: 20,
        paddingVertical: 5
    },
    myText: {
        marginHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 24,
        color: 'black',
        marginVertical: 20
    },
    myParagraph: {
        marginHorizontal: 20,
        marginVertical: 10,
    }
});

export default AuthComponent;
