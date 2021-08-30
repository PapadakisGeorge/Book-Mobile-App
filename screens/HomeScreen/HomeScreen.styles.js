import { StyleSheet } from 'react-native';

export const homeScreenStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        flex: 1
    },
    textContainer: {
        padding: 20
    },
    appLogo: {
        height: 100,
        width: 150,
        borderRadius: 40,
    },
    title: {
        fontFamily: 'Ubuntu-Regular'
    },
    content: {
        fontFamily: 'Ubuntu-Light',
        fontWeight: '300'
    },
    heroImage:{
        height: 200,
        width: 500,
    },
    menu: {
        position: 'absolute',
        bottom: 10
    },
    button: {
        paddingTop: 1,
        paddingBottom: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginRight: 50,
        marginLeft: 50
    },
    buttonText: {
        fontFamily: 'Ubuntu-Regular'
    },

})