import React, {useContext, useEffect, useState} from 'react';
import {FlatList, RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native'
import {Avatar, Caption, Paragraph} from "react-native-paper";
import moment from "moment";
import {GlobalContext} from "../../App";
import axios from "axios";
import {API_URL} from "../settings/settings";

moment.locale('ru')

function Notifications() {
    const {token} = useContext(GlobalContext)
    const [notif_, setNotif_] = useState([])
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        axios.get(API_URL + '/api/v1/auth/notification', {
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
          .finally(() => {
              setRefreshing(false)
          })
    }, []);

    useEffect(() => {
        console.log(notif_)
        notif()
    }, [])

    const notif = () => {
        axios.get(API_URL + '/api/v1/auth/notification', {
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

    return (
        <ScrollView
          style={{backgroundColor: '#272B34', height: '100%'}}
          refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
          }
        >
            <Caption style={{...styles.title, textAlign: 'center', marginVertical: 10}}>
                {moment().format('LL')}
            </Caption>
            <FlatList
                data={notif_}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <>
                        <View style={styles.item}>
                            <View>
                                <Avatar.Image size={60} source={{uri:`https://thumbs.dreamstime.com/b/%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE-%D1%84%D1%83%D1%82%D1%83%D1%80%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5-%D0%BF%D1%80%D0%B8%D0%B2%D1%8F%D0%B7%D1%8B%D0%B2%D0%B0%D0%B5%D1%82-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8E-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-cryptocurrency-187925201.jpg`}} />
                            </View>
                            <View style={{flexShrink: 1}}>
                                <Paragraph style={styles.title}>{item.title}</Paragraph>
                                <Text style={{color: '#fff', fontSize: 13, marginHorizontal: 3}}>{item.content}</Text>
                                <Text style={{color: '#fff', fontSize: 10, marginTop: 3, marginHorizontal: 3}}>{item.created_at}</Text>
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
        padding: 4,
        marginVertical: 1,
        marginHorizontal: 4
    },
    title: {
        color: '#fff',
        marginHorizontal: 3,
        fontSize: 16,
    },
});

export default Notifications;
