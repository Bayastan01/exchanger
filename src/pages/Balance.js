import React, {useState} from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Text,
    View,
} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {useNavigation} from "@react-navigation/native";

function Balance() {
    const {navigate} = useNavigation()
    return (
        <ScrollView style={{backgroundColor: '#272B34', height: '100%'}}>
            <SafeAreaView style={styles.container}>
                <View style={styles.itemAdd}>
                    <View>
                        <Image
                            style={styles.square}
                            source={{
                                uri: 'https://i.pinimg.com/736x/fe/46/da/fe46dac1c5fb329e97f1c31b21aa7a88.jpg',
                            }}
                        />
                    </View>
                    <View style={styles.DataView}>
                        <Text style={styles.itemSmall}>№ счета</Text>
                        <Text style={styles.itemText}>1232488929191</Text>
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
                        }}>39,983<Text style={{color: '#fff', fontSize: 15}}> USD</Text></Text>
                    </View>
                    <View style={{marginVertical: 2}}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 30,
                            fontWeight: '500'
                        }}>10,45<Text style={{color: '#fff', fontSize: 15}}> USDT</Text></Text>
                    </View>
                    <View style={{marginVertical: 2}}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 30,
                            fontWeight: '500'
                        }}>3305,45<Text style={{color: '#fff', fontSize: 15}}> KGS</Text></Text>
                    </View>
                </View>
                <View>
                    <View style={styles.itemAddValuta}>
                        <View style={styles.DataView}>
                            <Text style={styles.itemDollar}><Text>1 USD </Text></Text>
                            <Text style={styles.itemSom}>80,13 <Text>c</Text></Text>
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
                            <Text style={styles.itemSom}>82.67<Text>c</Text></Text>
                        </View>
                        <View>
                            <Image
                                style={styles.valuta}
                                source={{
                                    uri: 'https://s2.coinmarketcap.com/static/img/coins/200x200/825.png',
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
        fontSize: 18,
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
