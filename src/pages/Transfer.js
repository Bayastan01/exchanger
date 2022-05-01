import React from 'react'
import {StyleSheet} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import TransferMoneyEl from '../components/TransferMoneyEl'
import TransferMoneyMb from '../components/TransferMoneyMb'


function Transfer() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="MoneyElScreen"
      screenOptions={{
        tabBarActiveTintColor: '#02ABE1',
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: '#272B34'},
      }}>
      <Tab.Screen
        name="MoneyElScreen"
        component={TransferMoneyEl}
        options={{
          headerShown: false,
          tabBarLabel: 'Пополнение Элкарт',
          tabBarIcon: (props) => (
            <Ionicons {...props} name='cash-outline'  size={22}/>
          )
        }}
      />
      <Tab.Screen
        name="MoneyMBScreen"
        component={TransferMoneyMb}
        options={{
          headerShown: false,
          tabBarLabel: 'Пополнение МБ банк',
          tabBarIcon: (props) => (
            <Ionicons {...props} name='cash-outline'  size={22}/>
          )
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})


export default Transfer
