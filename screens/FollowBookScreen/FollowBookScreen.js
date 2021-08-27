import React, { useState } from 'react';
import { Text, View, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import bookList from '../../dataBases/BookDB';
import {followBookScreenStyles} from './FollowBookScreen.styles.js';

const FollowBook = ({route, navigation}) => {
    const [followingState, setFollowingState] = useState('unfollowed');
    const {bookId} = route.params;
    const selectedBook = bookList.find(books => books.eventId === bookId );

    const toggleFollow = () => {
        Alert.alert(`Book ${followingState}`);
        navigation.navigate('HomeScreen');
    }

    return(
        <View style={followBookScreenStyles.container}>
            <Text style={followBookScreenStyles.title}>
                {selectedBook.title}
            </Text>
            <Image
                style={followBookScreenStyles.bookImage}
                source={selectedBook.image}
            />
            <Text style={followBookScreenStyles.shortDescription}>
                {selectedBook.shortDescription}
            </Text>
            <Text style={followBookScreenStyles.description}>
                {selectedBook.description}
            </Text>
            <View style={followBookScreenStyles.followRow}>
                <Text style={followBookScreenStyles.shortDescription}></Text>
            </View>
            <TouchableOpacity
                onPress={toggleFollow}
                style={followBookScreenStyles.followButton}
            >
                <Text style={followBookScreenStyles.followButtonText}>Toggle Follow</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FollowBook;