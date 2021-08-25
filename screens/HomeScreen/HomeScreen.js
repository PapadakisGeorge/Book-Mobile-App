import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import {homeScreenStyles} from './HomeScreen.styles';

const HomeScreen = (props) => {
    return (
        <View style={homeScreenStyles.container}>
            <Image
                style={homeScreenStyles.appLogo}
                source={require('./assets/appLogo.png')}
                />
             <Text style={homeScreenStyles.title}>Welcome to BookApp</Text>
             <Text style={homeScreenStyles.subtitle}>{props.username}</Text>
             <View style={homeScreenStyles.textContainer}>
                <Text style={homeScreenStyles.content}>{introText}</Text>
             </View>
        </View>
    );
}

const introText = 'The text here is placeholder for the intro text!!!!'

export default HomeScreen;