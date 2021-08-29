import React, { useState } from 'react';
import { ImageBackground, Text, View, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import {loginScreenStyles} from './LoginScreen.styles.js';

const LoginScreen = ({navigation}) => {
    const [loginName, setLoginName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const login = () => {
        if (!loginName || !loginPassword){
            Alert.alert('Please enter your info in all required fields');
        } else {
            Alert.alert('Login successful!')
            navigation.navigate('HomeScreen');
        }
    }

    return(
        <View style={loginScreenStyles.container}>
            <View style={loginScreenStyles.imageContainer}>
                <Image
                    style={loginScreenStyles.appLogo}
                    source={require('./assets/appLogo.png')}
                />
                </View>
                <View style={loginScreenStyles.inputView}>
                    <TextInput
                        style={loginScreenStyles.textInput}
                        onChangeText={username => setLoginName(username)}
                        placeholder={'Enter your Username'}
                        autoCapitalize='words'
                        setTextOnFocus={true}
                    />
                </View>
                <View style={loginScreenStyles.inputView}>
                    <TextInput
                         style={loginScreenStyles.textInput}
                        onChangeText={password => setLoginPassword(password)}
                        placeholder={'Enter your Password'}
                        secureTextEntry={true}
                        setTextOnFocus={true}
                    />
                </View>
            <TouchableOpacity>
                <Text style={loginScreenStyles.forgotPasswordButton}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={loginScreenStyles.loginButton}>
                <Text
                style={loginScreenStyles.loginText}
                onPress={() => login()}
                >LOGIN</Text>
            </TouchableOpacity>
    </View>
    )
}

export default LoginScreen;