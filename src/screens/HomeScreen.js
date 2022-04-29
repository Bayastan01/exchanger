import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from "../pages/Profile";
import Balance from "../pages/Balance";
import Exchange from "../pages/Exchange";
import Ionicons from "react-native-vector-icons/Ionicons";
import Transfer from '../pages/Transfer'
import History from '../pages/History'

function HomeScreen() {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator
            initialRouteName="balance"
            screenOptions={{
                tabBarActiveTintColor: '#4662dd',
                tabBarLabelStyle: {fontSize: 12},
                tabBarStyle: {backgroundColor: '#fff'},
            }}>
            <Tab.Screen
                name="balance"
                component={Balance}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Баланс',
                    tabBarIcon: () => (
                        <Ionicons name='cash-outline'  size={25}/>
                    )
                }}
            />
            <Tab.Screen
              name="transfer_money"
              component={Transfer}
              options={{
                headerShown: false,
                tabBarLabel: 'Перевести',
                tabBarIcon: () => (
                  <Ionicons name='swap-horizontal-outline' size={25}/>
                )
              }}
            />
            <Tab.Screen
                name="exchange"
                component={Exchange}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Обменять',
                    tabBarIcon: () => (
                      <Ionicons name='sync-outline' size={25}/>
                    )
                }}
            />
            <Tab.Screen
              name="history"
              component={History}
              options={{
                headerShown: false,
                tabBarLabel: 'История', tabBarIcon: () => (
                  <Ionicons name='timer-outline' size={25}/>
                )
              }}
            />
            <Tab.Screen
                name="profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Профиль', tabBarIcon: () => (
                        <Ionicons name='person-outline' size={25}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeScreen
