import React, { useState } from 'react';
import { Button, Text, TextInput, View, Alert } from 'react-native';
import { contactScreenStyles } from './ContactScreen.styles.js';
const ContactScreen = ({navigation}) => {

    const [formName, setFormName] = useState();
    const [formEmail, setFormEmail] = useState();
    const [formPhoneNumber, setFormPhoneNumber] = useState();
    const [formMessage, setFormMessage] = useState();

    const submit = () => {
        if (!formName || !formEmail || !formMessage){
            Alert.alert('Please enter your info in all required fields');
        } else {
            Alert.alert(`Thank you ${formName}`)
            navigation.navigate('HomeScreen');
        }
    }

    return(
        <View style={contactScreenStyles.form}>
            <Text style={contactScreenStyles.labels}>
                Name: *required
            </Text>
            <TextInput
                style={contactScreenStyles.textInput}
                onChangeText={name => setFormName(name)}
                placeholder={'Enter Name'}
                autoCapitalize='words'
                setTextOnFocus={true}
            />
            <Text style={contactScreenStyles.labels}>
                 Email: *required
            </Text>
            <TextInput
                 style={contactScreenStyles.textInput}
                 onChangeText={email => setFormEmail(email)}
                 placeholder={'Enter Email'}
                 setTextOnFocus={true}
            />

            <Text style={contactScreenStyles.labels}>Phone:</Text>
            <TextInput
                  style={contactScreenStyles.textInput}
                  onChangeText={phoneNumber => setFormPhoneNumber(phoneNumber)}
                  placeholder={'Enter Phone Number'}
                  setTextOnFocus={true}
            />
            <Text style={contactScreenStyles.labels}>
                  Message: *required
            </Text>
            <TextInput
                 style={contactScreenStyles.multiTextInput}
                 onChangeText={message => setFormMessage(message)}
                 placeholder={'What is in your mind?'}
                 multiline={true}
                 numberOfLines={3}
                 setTextOnFocus={true}
            />

            <Button
                title='Leave your feedback!'
                color='#708090'
                onPress={submit}
             />
        </View>
    )
}

export default ContactScreen;