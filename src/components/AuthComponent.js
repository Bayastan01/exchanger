import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Button, Caption, Paragraph, TextInput} from "react-native-paper";

const AuthComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.myText}>Вход в систему</Text>

           <View style={{flexDirection: 'row'}}>
               <Button compact={false} mode="default" style={styles.myBtnEmail}>
                   Электронная почта
               </Button>

               <Button mode="default" style={styles.myBtnEmailRight}>
                   Номер телефона
               </Button>
           </View>

            <TextInput
                label="Полное имя"
                // value={full_name}
                // onChangeText={t => setFullName(t)}
                style={styles.myInput}
            />

            <TextInput
                label="Номер мобильного телефона"
                // value={phone_number}
                // keyboardType={'phone-pad'}
                // onChangeText={t => setPhoneNumber(t)}
                style={styles.myInput}
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
        // backgroundColor: '#f8f9fa',
    },
    myBtnEmailRight: {

    },
    container: {
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
