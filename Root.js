import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import App from './App';

const Root = () => {

    return (
        <NavigationContainer>
            <PaperProvider>
                <StatusBar backgroundColor={'#373F4C'} barStyle={'dark-content'} />
                <App />
            </PaperProvider>
        </NavigationContainer>
    );
};

export default Root;
