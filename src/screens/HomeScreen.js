import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from "../pages/Profile";
import Balance from "../pages/Balance";
import Exchange from "../pages/Exchange";
import Ionicons from "react-native-vector-icons/Ionicons";

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
                        <Ionicons {...props} name='cash-outline'  size={20}/>
                    )
                }}
            />
            <Tab.Screen
                name="exchange"
                component={Exchange}
                options={{
                    headerShown: false, tabBarLabel: 'Обменять',
                    tabBarIcon: (props) => (
                      <Ionicons {...props} name='stats-chart-outline' size={20}/>
                    )
                }}
            />
            <Tab.Screen
                name="profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Профиль', tabBarIcon: (props) => (
                        <Ionicons {...props} name='person-outline' size={20}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeScreen
