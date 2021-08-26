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
    width: 150
    },
    title: {
        fontFamily: 'Ubuntu-Regular'
    },
    subtitle: {
        paddingTop: 5,
         fontFamily: 'Ubuntu-Regular'
    },
    content: {
        fontFamily: 'Ubuntu-Light',
        fontWeight: '300'
    },
    heroImage:{
        height: 170,
        width: '100%'
    },
    menu: {
    position: 'absolute',
    bottom: 10
    }
})