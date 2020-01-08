import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import SearchInput from '../components/SearchInput';
import yelp from '../api/yelp';


const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        searchApi('pasta');
    }, []);

    const searchApi = async (term = searchTerm) => {
        try {
            await setErrorMsg('');
            const response = await yelp.get('/businesses/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose',
                }
            });
            setResults(response.data.businesses);
        }
        catch(err) {
            setErrorMsg('Something went wrong! Try again later.')
        }
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
    }
});

export default SearchScreen;