import { StyleSheet } from 'react-native';

export const booksScreenStyles = StyleSheet.create({
    container:{
        paddingTop: 15,
        paddingBottom: 15
    },
    books: {
        flexDirection: 'column'
    },
    imagePosition: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 200,
        width: 200,
        resizeMode: 'contain'
    },
    bookTitle: {
        fontFamily: 'Ubuntu-Regular',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    bookShortDescription: {
        fontFamily: 'Ubuntu-Light',
        fontWeight: '600',
        textAlign: 'center',
        paddingTop: 5
    },
    bookDescription: {
            fontFamily: 'Ubuntu-Light',
            fontWeight: '600',
            paddingTop: 15
    },
    bookButton: {
        fontFamily: 'Ubuntu-Regular',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 15,
        paddingTop: 5
    }
})