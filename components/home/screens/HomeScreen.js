import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native'; // Import ScrollView
import SearchBar from './home/SearchBar';
import Slide from './home/Slide';
import { Heading } from 'native-base';
import Items from './home/Items';
import Songs from './home/Songs';
import Suggest from './home/Suggest';
import Albums from './home/Albums';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>                
                <Items/>
                <Songs/>
                <Albums/>
                <Suggest/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131212',
    },
});
