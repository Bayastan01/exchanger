import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import App from './App';

const Root = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <NavigationContainer>
            <PaperProvider>
                <StatusBar barStyle={isDarkMode ? 'dark-content ' : 'light-content'} />
                <App />
            </PaperProvider>
        </NavigationContainer>
    );
};

export default Root;
