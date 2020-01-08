import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {withNavigation} from 'react-navigation';
import ResultItem from '../components/ResultItem';

const ResultsList = ({style, title, results, navigation}) => {
    return (
        results.length ?
        <View style={style}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={result => result.id}
                renderItem={ ({item}) => {
                    return (
                        <TouchableOpacity onPress={ () => navigation.navigate('ResultShow', {id: item.id}) }>
                            <ResultItem style={styles.list} result={item}/>
                        </TouchableOpacity>
                    );
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

export default withNavigation(ResultsList);