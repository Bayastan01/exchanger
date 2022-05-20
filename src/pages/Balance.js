import React, {useContext, useEffect, useState} from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Text,
    View,
    RefreshControl
} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {useNavigation} from "@react-navigation/native";
import {GlobalContext} from "../../App";
import axios from "axios";

function Balance() {
    const {token, setUser} = useContext(GlobalContext)
    const [well$, setWell$] = useState(0)
    const [well$T, setWell$T] = useState(0)
    const {navigate} = useNavigation()
    const {user} = useContext(GlobalContext)
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        axios.get('http://192.168.0.101:5002/api/v1/auth/me', {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
          .then((data) => {
              setUser(data.data.payload.user)
          })
          .catch((e) => {
              console.log(e)
          })
          .finally(() => {
              setRefreshing(false)
          })
    }, []);

    useEffect(() => {
        well()
    }, [user])

    const well = () => {
        axios.get('http://192.168.0.101:5002/api/v1/exchange', {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
          .then((data) => {
              setWell$(data.data.payload.rate_usd)
              setWell$T(data.data.payload.rate_usdt)
              console.log(data.data.payload)
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
            <SafeAreaView style={styles.container}>
                <View style={styles.itemAdd}>
                    <View>
                        <Image
                            style={styles.square}
                            source={{
                                uri: 'https://thumbs.dreamstime.com/b/%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE-%D1%84%D1%83%D1%82%D1%83%D1%80%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5-%D0%BF%D1%80%D0%B8%D0%B2%D1%8F%D0%B7%D1%8B%D0%B2%D0%B0%D0%B5%D1%82-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8E-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-cryptocurrency-187925201.jpg',
                            }}
                        />
                    </View>
                    <View style={styles.DataView}>
                        <Text style={styles.itemSmall}>№ счета</Text>
                        <Text style={styles.itemText}>{user.email}{user.phone_number}</Text>
                    </View>
                    <MaterialCommunityIcons
                        name="bell-badge-outline"
                        size={24} color="#EDF2F6"
                        onPress={() => navigate('Notifications')}/>
                </View>
                <View style={styles.bigCorobca}>
                    <Text style={{color: '#fff', textAlign: 'center'}}>Ваш баланс</Text>
                    <View style={{marginVertical: 5}}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 30,
                            fontWeight: '500'
                        }}>{user.balance_usd}<Text style={{color: '#fff', fontSize: 15}}> USD</Text></Text>
                    </View>
                    <View style={{marginVertical: 2}}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 30,
                            fontWeight: '500'
                        }}>{user.balance_usdt}<Text style={{color: '#fff', fontSize: 15}}> USDT</Text></Text>
                    </View>
                    <View style={{marginVertical: 2}}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 30,
                            fontWeight: '500'
                        }}>{user.balance_kgs}<Text style={{color: '#fff', fontSize: 15}}> KGS</Text></Text>
                    </View>
                </View>
                <View>
                    <View style={styles.itemAddValuta}>
                        <View style={styles.DataView}>
                            <Text style={styles.itemDollar}><Text>1 USD </Text></Text>
                            <Text style={styles.itemSom}>{well$} С</Text>
                        </View>
                        <View>
                            <Image
                                style={styles.valuta}
                                source={{
                                    uri: 'https://www.logolynx.com/images/logolynx/40/4058bbdfdec989db5cf34147d4c5dad2.jpeg',
                                }}
                            />
                        </View>
                    </View>

                    <View style={styles.itemAddValuta}>
                        <View style={styles.DataView}>
                            <Text style={styles.itemDollar}><Text>1 USDT </Text></Text>
                            <Text style={styles.itemSom}>{well$T} С</Text>
                        </View>
                        <View>
                            <Image
                                style={styles.valuta}
                                source={{
                                    uri: 'https://thumbs.dreamstime.com/b/%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE-%D1%84%D1%83%D1%82%D1%83%D1%80%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5-%D0%BF%D1%80%D0%B8%D0%B2%D1%8F%D0%B7%D1%8B%D0%B2%D0%B0%D0%B5%D1%82-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8E-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-cryptocurrency-187925201.jpg',
                                }}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    square: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: 15,
    },
    itemAdd: {
        marginVertical: 10,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#373F4C',
        marginHorizontal: 7,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    itemAddValuta: {
        marginVertical: 20,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#373F4C',
        marginHorizontal: 7,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    itemText: {
        maxWidth: '80%',
        color: '#EDF2F6',
        fontSize: 16,
        fontWeight: '500',
    },
    itemSmall: {
        color: '#707989',
        fontSize: 10,
    },
    DataView: {
        flex: 1,
    },
    bigCorobca: {
        alignItems: 'center',
        marginHorizontal: 30,
        borderRadius: 10,
    },
    valuta: {
        width: 60,
        height: 60,
        borderRadius: 100,
    },
    itemDollar: {
        color: '#fff',
        fontSize: 30,
    },
    itemSom: {
        color: '#fff',
        fontSize: 20,
    }
});


export default Balance;
