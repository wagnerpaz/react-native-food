import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import SearchInput from '../components/SearchInput';


const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <View style={styles.container}>
            <SearchInput
                term={searchTerm}
                onTermChange={newTerm => setSearchTerm(newTerm)}
                onTermSubmit={() => console.log(`term '${searchTerm}' was submited.`)}
            />
            <Text>{searchTerm}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
    }
});

export default SearchScreen;