import React, {useContext, useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from "react-native";
import {Avatar, Caption, Paragraph} from "react-native-paper";
import moment from "moment";
import {GlobalContext} from "../../App";
import axios from "axios";
import {API_URL} from "../settings/settings";

moment.locale('ru')

function Notifications() {
    const {token} = useContext(GlobalContext)
    const [notif_, setNotif_] = useState([])

    useEffect(() => {
        console.log(notif_)
        notif()
    }, [])

    const notif = () => {
        axios.get(API_URL + '/api/v1/exchange/history', {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
            .then((data) => {
                setNotif_(data.data.payload)
                console.log(data)
            })
            .catch((e) => {
                console.log(e)
            })
    }
    console.log(notif_)

    return (
        <ScrollView style={{backgroundColor: '#272B34', height: '100%'}}>
            <Caption style={{...styles.title, marginVertical: 20, marginHorizontal: 20}}>
                {moment().format('LL')}
            </Caption>
            <FlatList
                data={notif_}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <>
                        <View style={styles.item}>
                            <View style={{flexGrow: 1}}>
                                <Avatar.Image size={60} source={{uri:`https://thumbs.dreamstime.com/b/%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE-%D1%84%D1%83%D1%82%D1%83%D1%80%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5-%D0%BF%D1%80%D0%B8%D0%B2%D1%8F%D0%B7%D1%8B%D0%B2%D0%B0%D0%B5%D1%82-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8E-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-cryptocurrency-187925201.jpg`}} />
                            </View>
                            <View style={{flexGrow: 5}}>
                                <Paragraph style={styles.title}>Пополнения</Paragraph>
                                <Text style={{color: '#fff'}}>Курс: {item.from_currency} - {item.currency_rate}</Text>
                                <Text style={{color: '#fff', fontSize: 10, marginTop: 10}}>{item.created_at}</Text>
                            </View>
                            <View style={{flexGrow: 1}}>
                                <Text style={styles.title} onPress={() => history()}>+ {item.to_amount} Cом</Text>
                            </View>
                        </View>
                    </>
                )}
            />
        </ScrollView>
    );
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

export default Notifications;
