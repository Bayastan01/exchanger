import React from 'react';
import type {Node} from 'react';
import {StyleSheet,} from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen'
import {NavigationContainer} from '@react-navigation/native'
import AuthForgotPass from "./src/components/AuthForgotPass";
import HomeScreen from './src/screens/HomeScreen'
import AuthRegistration from './src/components/AuthRegistration'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Transfer from './src/pages/Transfer'
import Profile from "./src/pages/Profile";
import Notifications from "./src/pages/Notifications";

const App: () => Node = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="WelcomeScreen">
                <Stack.Screen
                    name="WelcomeScreenHome"
                    component={WelcomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{headerShown: false,title: 'Home'}}
                />
                <Stack.Screen
                    name="AuthForgotPass"
                    component={AuthForgotPass}
                    options={{title: 'Забыли пароль?'}}
                />
                <Stack.Screen
                    name="AuthRegistrationScreen"
                    component={AuthRegistration}
                    options={{ title: 'Создания аккаунта Test' }}
                />
                <Stack.Screen
                    name="Notifications"
                    component={Notifications}
                    options={{ title: 'Уведомления' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({});

export default App;
