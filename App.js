import React from 'react';
import type {Node} from 'react';
import {
    StyleSheet,
} from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen'
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from './src/screens/HomeScreen'
import AuthRegistration from './src/components/AuthRegistration'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const App: () => Node = () => {
    const Stack = createNativeStackNavigator();

    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="WelcomeScreen">
            <Stack.Screen
              name="WelcomeScreenHome"
              component={WelcomeScreen}
              options={{
                title: 'Вход в систему ',
                headerStyle: {
                  backgroundColor: '#473b3b',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontSize: 25,
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ title: 'Home' }}
            />
            <Stack.Screen
              name="AuthRegistrationScreen"
              component={AuthRegistration}
              options={{ title: 'Создания аккаунта Test' }}
            />
          </Stack.Navigator>
      </NavigationContainer>
    );
};

const styles = StyleSheet.create({});

export default App;
