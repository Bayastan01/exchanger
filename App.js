import React from 'react';
import type {Node} from 'react';
import {
    StyleSheet,
} from 'react-native';
import AuthComponent from "./src/components/AuthComponent";


const App: () => Node = () => {
    const is_authorized = true;
    const user_type = 'Email';

    return (
        <>
            {is_authorized ? (
                <AuthComponent/>
            ): user_type === 'Email'
            }
        </>
    );
};

const styles = StyleSheet.create({});

export default App;
