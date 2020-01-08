import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import SearchInput from '../components/SearchInput';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchApi, results, errorMsg] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter( result => {
            return result.price === price;
        });
    };

    return (
        <View style={styles.container}>
            <SearchInput
                term={searchTerm}
                onTermChange={newTerm => setSearchTerm(newTerm)}
                onTermSubmit={searchApi}
            />
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            <Text>We have found {results.length} results.</Text>
            <ResultsList
                title="Cost Effective"
                results={filterResultsByPrice('$')}
            />
            <ResultsList
                title="Bit Pricier"
                results={filterResultsByPrice('$$')}
            />
            <ResultsList
                title="Big Spender"
                results={filterResultsByPrice('$$$')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
    }
});

export default SearchScreen;