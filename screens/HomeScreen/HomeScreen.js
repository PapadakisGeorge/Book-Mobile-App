import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {homeScreenStyles} from './HomeScreen.styles';
import { useNavigation } from '@react-navigation/native';
import Menu from '../../components/Menu/Menu';

const HomeScreen = (props) => {

    const navigation = useNavigation();

    return (
        <View style={homeScreenStyles.container}>
            <Image
                style={homeScreenStyles.appLogo}
                source={require('./assets/appLogo.png')}
            />
            <Text style={homeScreenStyles.title}>Welcome to BookApp</Text>
            <Text style={homeScreenStyles.subtitle}>Please Login</Text>
            <TouchableOpacity
                onPress={() =>{
                   navigation.navigate('LoginScreen')
                   }
                }
                style={homeScreenStyles.button}
            >
                <Text style={homeScreenStyles.buttonText}>Login</Text>
            </TouchableOpacity>
             <Image
                   style={homeScreenStyles.heroImage}
                   source={require('./assets/boxing.jpg')}
             />
             <View style={homeScreenStyles.textContainer}>
                <Text style={homeScreenStyles.content}>{introText}</Text>
             </View>
             <View>
                <Menu />
             </View>
        </View>
    );
}

const introText = 'Search for all your favourite books!!!!'

export default HomeScreen;