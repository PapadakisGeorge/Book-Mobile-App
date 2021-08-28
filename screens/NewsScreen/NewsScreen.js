import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator, FlatList, Image } from 'react-native';
import {newsScreenStyles} from './NewsScreen.styles';

const NewsScreen = () => {
    const [isLoaded, setDataLoaded] = useState(true);
    const [storyData, setStoryData] = useState();

    const getNews = async () => {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
            let stories = await response.json();
            setStoryData(stories);
            setDataLoaded(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect (() => {
        getNews();
    }, []);

    console.log(storyData);

    const newsItem = ({item}) => {
        return (
            <View style={newsScreenStyles.storyList}>
                <Image
                    style={newsScreenStyles.thumb}
                    source={{ uri: item.url }}
                />
                <Text style={newsScreenStyles.storyText}>{item.title}</Text>
                <Text style={newsScreenStyles.storyText}>{item.url}</Text>
            </View>
        )
    };

    return (
        <View style={newsScreenStyles.container}>
            {isLoaded? <ActivityIndicator /> : (
                <FlatList
                    data={storyData}
                    renderItem={newsItem}
                    keyExtractor={(item) => item.title}
                />
            )}
        </View>
    )
}

export default NewsScreen;