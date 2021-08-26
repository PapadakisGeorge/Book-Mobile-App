import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import {homeScreenStyles} from './HomeScreen.styles';
import Menu from '../../components/Menu/Menu';

const HomeScreen = (props) => {
    return (
        <View style={homeScreenStyles.container}>
            <Image
                style={homeScreenStyles.appLogo}
                source={require('./assets/appLogo.png')}
                />
             <Text style={homeScreenStyles.title}>Welcome to BookApp</Text>
             <Text style={homeScreenStyles.subtitle}>{props.username}</Text>
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