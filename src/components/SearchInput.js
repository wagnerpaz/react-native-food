import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchInput = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.icon}/>
            <TextInput
                style={styles.input}
                placeholder="Search"
                value={term}
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        fontSize: 18,
    },
    icon: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 5,
    }
});

export default SearchInput;