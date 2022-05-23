import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, Dimensions, Text, ScrollView, SafeAreaView, Alert} from "react-native";
import {Avatar, Button, TextInput} from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";
import {GlobalContext} from "../../App";
import axios from 'axios'
import {API_URL} from '../settings/settings'

const screenSize = Dimensions.get('window');

const Profile = () => {
    const [password_key, setPassword_key] = useState(true);
    const [password_key2, setPassword_key2] = useState(true);
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [name_key, setName_key] = useState(true);
    const [number_key, setNumber_key] = useState(true);
    const [number, setNumber] = useState('');
    const [email_key, setEmail_key] = useState(true);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState(true)
    const [pass2, setPass2] = useState(true)
    const {user, signOut, token} = useContext(GlobalContext)

    const add = () => {
      axios.post(API_URL + '/api/v1/auth/password', {
          current_password: password,
          new_password: password2
      }, {
          headers: {
              'Authorization': `Bearer ${token}`,
          }
      },).then((response) => {
          console.log(response)
          alert('Ваш данный изменён')
      }).catch((e) => {
          console.log(e)
          alert('Ошибка')
      })}

    useEffect(() => {
        setNumber(user.phone_number)
        setEmail(user.email)
    }, [])

    console.log(user)
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <View style={styles.avatar}>
                        <View>
                            <Avatar.Image
                                style={styles.avatar_img}
                                size={screenSize.width * 0.4}
                                source={{
                                    uri: 'https://thumbs.dreamstime.com/b/%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE-%D1%84%D1%83%D1%82%D1%83%D1%80%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5-%D0%BF%D1%80%D0%B8%D0%B2%D1%8F%D0%B7%D1%8B%D0%B2%D0%B0%D0%B5%D1%82-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8E-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-cryptocurrency-187925201.jpg',
                                }}/>
                        </View>
                    </View>
                    <View>
                        <View style={styles.textinput}>
                            <TextInput
                                style={styles.input}
                                mode='outlined'
                                activeOutlineColor='green'
                                outlineColor="#3f51b5"
                                disabled={number_key}
                                dense={true}
                                placeholder="Номер"
                                value={number}
                                onChangeText={l => setNumber(l)}
                            />
                            {number_key ? (
                                <Ionicons
                                    style={styles.pencil}
                                    name='pencil'
                                    color={'#3f51b5'}
                                    size={27}
                                    onPress={() => setNumber_key(false)}/>
                            ) : (
                                <Entypo
                                    style={styles.pencil}
                                    name='check'
                                    color={'green'}
                                    size={27}
                                    onPress={() => setNumber_key(true)}/>
                            )}
                        </View>
                        <View style={styles.textinput}>

                            <TextInput
                                style={styles.input}
                                mode='outlined'
                                activeOutlineColor='green'
                                outlineColor="#3f51b5"
                                disabled={email_key}
                                dense={true}
                                placeholder="Электронная почта"
                                value={email}
                                onChangeText={l => setEmail(l)}
                            />
                            {email_key ? (
                                <Ionicons
                                    style={styles.pencil}
                                    name='pencil'
                                    color={'#3f51b5'}
                                    size={27}
                                    onPress={() => setEmail_key(false)}/>
                            ) : (
                                <Entypo
                                    style={styles.pencil}
                                    name='check'
                                    color={'green'}
                                    size={27}
                                    onPress={() => setEmail_key(true)}/>
                            )}
                        </View>
                        <View style={styles.textinput}>

                            <TextInput
                                style={styles.input}
                                secureTextEntry={pass}
                                mode='outlined'
                                activeOutlineColor='green'
                                outlineColor="#3f51b5"
                                disabled={password_key}
                                dense={true}
                                placeholder="текущий пароль"
                                value={password}
                                onChangeText={l => setPassword(l)}
                                right={<TextInput.Icon onPress={() => setPass(p => !p)}
                                                       name={pass ? 'eye-off' : 'eye'}/>}
                            />
                            {password_key ? (
                                <Ionicons
                                    style={styles.pencil}
                                    name='pencil'
                                    color={'#3f51b5'}
                                    size={27}
                                    onPress={() => setPassword_key(false)}/>
                            ) : (
                                <Entypo
                                    style={styles.pencil}
                                    name='check'
                                    color={'green'}
                                    size={27}
                                    onPress={() => setPassword_key(true)}/>
                            )}
                        </View>
                        <View style={styles.textinput}>
                        <TextInput
                            style={styles.input}
                            secureTextEntry={pass2}
                            mode='outlined'
                            activeOutlineColor='green'
                            outlineColor="#3f51b5"
                            disabled={password_key2}
                            dense={true}
                            placeholder="Новый пароль"
                            value={password2}
                            onChangeText={l => setPassword2(l)}
                            right={<TextInput.Icon onPress={() => setPass2(p => !p)}
                                                   name={pass2 ? 'eye-off' : 'eye'}/>}
                        />
                            {password_key2 ? (
                                <Ionicons
                                    style={styles.pencil}
                                    name='pencil'
                                    color={'#3f51b5'}
                                    size={27}
                                    onPress={() => setPassword_key2(false)}/>
                            ) : (
                                <Entypo
                                    style={styles.pencil}
                                    name='check'
                                    color={'green'}
                                    size={27}
                                    onPress={() => setPassword_key2(true)}/>
                            )}
                        </View>
                    </View>
                </View>
                <Button
                    style={{
                        marginHorizontal: 20,
                        marginTop: 30,
                        paddingVertical: 2,
                    }}
                    mode="contained"
                    onPress={() => add()}
                    >
                    Сохранить
                </Button>
                <Button style={styles.myButton}
                 mode="contained" onPress={signOut}>
                    Выйти
                </Button>
            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#272B34",
    },
    myButton: {
        marginHorizontal: 20,
        marginVertical: 10,
        paddingVertical: 2,
    },
    pencil: {
        marginTop: 20
    },
    input: {
        width: '80%',
        marginTop: 10,
        marginLeft: 25
    },
    textinput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        marginTop: 5,
        marginHorizontal: 15,
    },
    avatar: {
        alignItems: 'center',
    },
    text1: {
        color: '#999999',
        fontWeight: 'bold',
        fontSize: 20
    },
    text2: {
        color: '#999999',
        fontWeight: 'bold',
        fontSize: 18
    },
    icons1: {
        marginRight: -20,
        marginTop: 20
    }, icons2: {
        marginRight: -20,
        marginTop: 20,
        marginLeft: 5
    }, icons3: {
        marginRight: -20,
        marginTop: 20,
        marginLeft: 3
    }, icons4: {
        marginRight: -20,
        marginTop: 20,
        marginLeft: 10
    },
    avatar_img: {
        marginVertical: 20,
        marginBottom: 0
    }
});
export default Profile;
