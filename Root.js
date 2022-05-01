import React from 'react'
import {StatusBar, useColorScheme} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import App from './App';

const Root = () => {

    return (
        <NavigationContainer>
            <PaperProvider>
                <StatusBar backgroundColor={'#272B34'}/>
                <App />
            </PaperProvider>
        </NavigationContainer>
    );
};

export default Root;
