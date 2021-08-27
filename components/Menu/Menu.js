import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { menuStyles } from './Menu.styles';

const Menu = () => {

    const navigation = useNavigation();

    return(
        <View style={menuStyles.menu}>
            <TouchableOpacity
                onPress={() => { navigation.navigate('BooksScreen')}}
                style={menuStyles.button}
            >
                <Text style={menuStyles.buttonText}>Books</Text>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() => { navigation.navigate('ContactScreen')}}
               style={menuStyles.button}
            >
                <Text style={menuStyles.buttonText}>Contact Us</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Menu;