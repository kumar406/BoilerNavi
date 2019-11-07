import React from 'react';
import { StatusBar, KeyboardAvoidingView } from "react-native";

import { Container } from '../components/Container';
import { RegistrationForm } from '../components/Form';
import { InputWithButton } from '../components/TextInput';

export default class Registration extends Component {
    render () {
        return (
            <Container backgroundColor={$primaryGold}>
                <KeyboardAvoidingView behavior="padding">
                    <StatusBar translucent={false} barStyle="light-content" />
                    <RegistrationForm />
                    <InputWithButton />
                    
                </KeyboardAvoidingView>
            </Container>
        );
    }
}

