import React from 'react';
import { View, TouchableOpacity, Text, } from 'react-native';
import { loginComponentStyles } from './LoginComponent.styles';
import { useNavigation } from '@react-navigation/native';

const LoginComponent = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text style={loginComponentStyles.subtitle}>Please Login</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('LoginScreen')
                        }
                    }
                    style={loginComponentStyles.button}
                >
                    <Text style={loginComponentStyles.buttonText}>Login</Text>
                </TouchableOpacity>
        </View>
    )
};

export default LoginComponent;