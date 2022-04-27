import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from "../pages/Profile";
import Balance from "../pages/Balance";
import Exchange from "../pages/Exchange";
import Ionicons from "react-native-vector-icons/Ionicons";

// import { AntDesign } from '@expo/vector-icons';

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
                        <Ionicons name='cash-outline'  size={20}/>
                    )
                }}
            />
            <Tab.Screen
                name="exchange"
                component={Exchange}
                options={{
                    headerShown: false, tabBarLabel: 'Обменять', tabBarIcon: () => (
                        <Ionicons name='stats-chart-outline' size={20}/>
                    )
                }}
            />
            <Tab.Screen
                name="profile"
                component={Profile}
                options={{
                    headerShown: false, tabBarLabel: 'Профиль', tabBarIcon: () => (
                        <Ionicons name='person-outline' size={20}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeScreen
