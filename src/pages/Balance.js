import React, {useState} from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function Balance() {
    return (
        <>
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
                    <MaterialCommunityIcons name="bell-badge-outline" size={24} color="#EDF2F6"/>
                </View>
                <View style={styles.bigCorobca}>
                    <Text style={{color: '#fff', textAlign: 'center'}}>Ваш баланс</Text>
                    <View>
                        <Text style={{
                            color: '#fff',
                            fontSize: 30,
                            fontWeight: '500'
                        }}>39,983<Text style={{color: '#fff', fontSize: 15}}>  USD</Text></Text>
                    </View>
                    <Text style={{color: '#fff', fontSize: 20, marginTop: 5,  fontWeight: '500'}}>3305,45
                        <Text style={{color: '#fff', fontSize: 15}}>  KGS</Text></Text>
                </View>
                <View>
                    <View style={styles.itemAddValuta}>

                        <View style={styles.DataView}>
                            <Text style={styles.itemDollar}><Text>$</Text>1</Text>
                            <Text style={styles.itemSom}>84,13 c</Text>
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
                </View>
            </SafeAreaView>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#272B34'
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
        marginVertical: 30,
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
        fontSize: 13,
        fontWeight: '700',
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
        width: 50,
        height: 50,
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
