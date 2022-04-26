import React from 'react';
import {StyleSheet, View} from "react-native";
import {TextInput} from "react-native-paper";

const AuthEmailComponent = () => {
    return (
        <View style={styles.container}>
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
        </View>
    );
};

const styles = StyleSheet.create({
    myInput: {
        height: 60,
        marginVertical: 8,
    },
});

export default AuthEmailComponent;
