import { StyleSheet } from 'react-native';


export const homeScreenStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20
    },
    textContainer: {
        textAlign: 'center',
        paddingTop: 10
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
    }
})