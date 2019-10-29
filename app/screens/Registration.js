import React from 'react';
import { View, StatusBar, Text, TextInput, TouchableOpacity } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

import { Container, styles } from '../components/Container';
import { Registration } from '../components/Form';

export default class Registration extends React.Component {
    render () {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <View style={styles.regform}>
                    <Text style={styles.header}>Registration</Text>

                    <TextInput style={styles.textInput} placeholder="Your name"
                    underlineColorAndroid={'transparent'}/>

                    <TextInput style={styles.textInput} placeholder="Your email"
                    underlineColorAndroid={'transparent'}/>

                    <TextInput style={styles.textInput} placeholder="Your email"
                    secureTextEntry={true} underlineColorAndroid={'transparent'}/>

                </View>
            </Container>
        );
    }
}

