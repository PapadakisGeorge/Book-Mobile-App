import { StyleSheet } from 'react-native';

export const loginScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    imageContainer: {
        marginBottom: 20,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    image: {
        marginBottom: 40,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    inputView: {
        backgroundColor: '#ffcc99',
        borderRadius: 30,
        width: '70%',
        height: 45,
        marginBottom: 20,
        alignItems: 'center',
        fontFamily: 'Ubuntu-Regular'
    },
    textInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    appLogo: {
        height: 100,
        width: 150,
        borderRadius: 40,
    },
    labels: {
        fontFamily: 'Ubuntu-Regular'
    },
    forgotPasswordButton: {
        height: 30,
    },
   loginButton: {
       width: 100,
       borderRadius: 25,
       height: 50,
       alignItems: 'center',
       justifyContent: 'center',
       marginTop: 40,
       backgroundColor: '#ccff66',
   },
})