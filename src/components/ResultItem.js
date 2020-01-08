import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ResultItem = ({style, result}) => {
    return (
        <View style={style}>
            <Image style={styles.image} source={{ uri: result.image_url }}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
    },
    name: {
        fontWeight: 'bold',
    }
});

export default ResultItem;