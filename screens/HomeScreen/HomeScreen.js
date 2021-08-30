import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { homeScreenStyles } from './HomeScreen.styles';
import { useNavigation } from '@react-navigation/native';
import Menu from '../../components/Menu/Menu';
import LoginComponent from '../../components/Login/LoginComponent'

const HomeScreen = (props) => {


    const navigation = useNavigation();
    const Greeting = (props) => {
                       const isLoggedIn = props.isLoggedIn;
                       if (isLoggedIn) {
                         return <LoginComponent/>;
                       }
                        return <Text style={homeScreenStyles.subtitle}>Hi #1 user!!!</Text>
                     }

    return (
        <View style={homeScreenStyles.container}>
            <Image
                style={homeScreenStyles.appLogo}
                source={require('./assets/appLogo.png')}
            />
            <Text style={homeScreenStyles.title}>Welcome to BookApp</Text>
            <Greeting isLoggedIn = {true}/>
            <View style={homeScreenStyles.container}>
                <Image
                    style={homeScreenStyles.heroImage}
                    source={require('./assets/boxing.jpg')}
                />
            </View>
            <View style={homeScreenStyles.textContainer}>
                <Text style={homeScreenStyles.content}>{introText}</Text>
            </View>
            <View>
                <Menu/>
            </View>
        </View>
    );
}

const introText = 'Search for all your favourite books!!!!'

export default HomeScreen;