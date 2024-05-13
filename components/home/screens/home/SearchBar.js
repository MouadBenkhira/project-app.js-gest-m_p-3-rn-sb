// SearchBar.js
import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchBar as RNESearchBar, Icon } from 'react-native-elements';

export default function SearchBar({ placeholder }) {
    const searchRef = useRef(null);

    return (
        <View style={styles.container}>
            <RNESearchBar
                ref={searchRef}

                placeholder={placeholder || 'Search'}
                containerStyle={styles.searchContainer}
                inputContainerStyle={styles.inputContainer}
            />
          
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 200,
        backgroundColor: '#131212',
        paddingHorizontal: 10,
    },
    searchContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        paddingHorizontal: 0,
    },
    inputContainer: {
        backgroundColor: '#e6e6e6',
    },
    iconContainer: {
        marginLeft: 5,
    },
});
