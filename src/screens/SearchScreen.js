import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import SearchInput from '../components/SearchInput';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchApi, results, errorMsg] = useResults();

    return (
        <View style={styles.container}>
            <SearchInput
                term={searchTerm}
                onTermChange={newTerm => setSearchTerm(newTerm)}
                onTermSubmit={searchApi}
            />
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            <Text>We have found {results.length} results.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
    }
});

export default SearchScreen;