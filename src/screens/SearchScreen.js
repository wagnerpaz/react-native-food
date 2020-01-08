import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

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
        <>
            <SearchInput
                style={styles.search}
                term={searchTerm}
                onTermChange={newTerm => setSearchTerm(newTerm)}
                onTermSubmit={() => searchApi(searchTerm) }
            />
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            <ScrollView>
                <ResultsList
                    style={styles.result}
                    title="Cost Effective"
                    results={filterResultsByPrice('$')}
                />
                <ResultsList
                    style={styles.result}
                    title="Bit Pricier"
                    results={filterResultsByPrice('$$')}
                />
                <ResultsList
                    style={styles.result}
                    title="Big Spender"
                    results={filterResultsByPrice('$$$')}
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    search: {
        margin: 10,
    },
    result: {
        marginBottom: 10,
    }
});

export default SearchScreen;