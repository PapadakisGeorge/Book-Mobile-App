import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import bookList from './BookDB';
import { booksScreenStyles } from './BooksScreen.styles';

const BooksScreen = () => {
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
                    <Text style={booksScreenStyles.bookButton}>
                        Get Book
                    </Text>
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