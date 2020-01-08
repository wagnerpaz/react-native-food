import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultItem from '../components/ResultItem';

const ResultsList = ({style, title, results}) => {
    return (
        results.length ?
        <View style={style}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={result => result.id}
                renderItem={ ({item}) => {
                    return <ResultItem style={styles.list} result={item}/>
                }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
        : null
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5,
    },
    list: {
        marginLeft: 10,
    }
});

export default ResultsList;