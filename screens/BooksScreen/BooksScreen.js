import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import bookList from '../../dataBases/BookDB';
import { booksScreenStyles } from './BooksScreen.styles';

const BooksScreen = ({navigation}) => {
    const bookItem = ({item}) => {
        return(
            <View style={booksScreenStyles.books}>
                <View style={booksScreenStyles.imagePosition}>
                    <Image
                        style={booksScreenStyles.image}
                        source={item.image}
                        />
                </View>
                <View>
                    <Text style={booksScreenStyles.bookTitle}>
                        {item.event}
                    </Text>
                    <Text style={booksScreenStyles.bookShortDescription}>
                        {item.shortDescription}
                    </Text>
                    <Text
                        style={booksScreenStyles.bookDescription}
                        numberOfLines={2}
                        ellipsizeMode='tail'
                    >
                        {item.description}
                    </Text>
                    <TouchableOpacity
                        onPress={() =>{
                            navigation.navigate('FollowBookScreen', {bookId: item.eventId})
                            }
                        }
                        style={booksScreenStyles.button}
                    >
                        <Text style={booksScreenStyles.button}>Follow Book</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    return(
        <View style={booksScreenStyles.container}>
            <FlatList
                data={bookList}
                renderItem={bookItem}
                keyExtractor={(item) => item.eventId}
            />
        </View>
    )
}

export default BooksScreen;