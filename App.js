import React from 'react';
import type {Node} from 'react';
import {
    StyleSheet,
} from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
import AuthForgotPass from "./src/components/AuthForgotPass";

const App: () => Node = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="WelcomeScreen">
                <Stack.Screen
                    name="WelcomeScreenHome"
                    component={WelcomeScreen}
                    options={{title: 'Вход в систему'}}
                />
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{title: 'Home'}}
                />
                <Stack.Screen
                    name="AuthForgotPass"
                    component={AuthForgotPass}
                    options={{title: 'Забыли пароль?'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({});

export default App;
