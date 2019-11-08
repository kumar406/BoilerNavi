import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';


export default class Registration {
    render () {
        return (
            <View style={styles.regform}>
                <StatusBar translucent={false} barStyle="light-content" />
                <Text style={styles.header}>Registration</Text>
                <TextInput style={styles.textinput} placeholder="Your name" />
                <TextInput style={styles.textinput} placeholder="Your email" />
            </View>
        );
    }
}