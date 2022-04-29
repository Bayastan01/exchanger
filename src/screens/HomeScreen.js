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
                tabBarActiveTintColor: '#02ABE1',
                tabBarLabelStyle: {fontSize: 12},
                tabBarStyle: {backgroundColor: '#272B34'},
            }}>
            <Tab.Screen
                name="balance"
                component={Balance}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Баланс',
                    tabBarIcon: (props) => (
                        <Ionicons {...props} name='cash-outline'  size={22}/>
                    )
                }}
            />
            <Tab.Screen
              name="transfer_money"
              component={Transfer}
              options={{
                headerShown: false,
                tabBarLabel: 'Перевести',
                tabBarIcon: (props) => (
                  <Ionicons {...props}  name='swap-horizontal-outline' size={22}/>
                )
              }}
            />
            <Tab.Screen
                name="exchange"
                component={Exchange}
                options={{
                    headerShown: false, tabBarLabel: 'Обменять',
                    tabBarIcon: (props) => (
                      <Ionicons {...props} name='sync-outline' size={22}/>
                    )
                }}
            />
            <Tab.Screen
              name="history"
              component={History}
              options={{
                headerShown: false,
                tabBarLabel: 'История', tabBarIcon: (props) => (
                  <Ionicons {...props} name='timer-outline' size={22}/>
                )
              }}
            />
            <Tab.Screen
                name="profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Профиль', tabBarIcon: (props) => (
                        <Ionicons {...props} name='person-outline' size={22}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeScreen
