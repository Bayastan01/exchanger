import React from 'react';
import type {Node} from 'react';
import {
    StyleSheet,
} from 'react-native';
import AuthEmailComponent from "./src/components/AuthEmailComponent";


const App: () => Node = () => {
    const is_authorized = true;
    const user_type = 'Email';

    return (
        <>
            {is_authorized ? (
                <AuthEmailComponent/>
            ): user_type === 'Email'
            }
        </>
    );
};

const styles = StyleSheet.create({});

export default App;
