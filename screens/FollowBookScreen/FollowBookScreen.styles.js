import { StyleSheet } from 'react-native';

export const followBookScreenStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 10
    },
    followRow: {
        flexDirection: 'row',
    },
    title: {
        fontFamily: 'Ubuntu-Regular',
        paddingBottom: 10
    },
    bookImage: {
        height: 200,
        width: 200,
        resizeMode: 'contain'
    },
    shortDescription: {
        fontFamily: 'Ubuntu-Regular',
        paddingBottom: 5,
        textAlignVertical: 'center'
    },
    description: {
        textAlign: 'left',
        fontFamily: 'Ubuntu-Light',
        fontWeight: '600',
        padding: 10
    },
    followButton:   {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        width: '25%'
    },
    followButtonText: {
        fontFamily: 'Ubuntu-Regular',
        textAlign: 'center',
        padding: 5
    }

})