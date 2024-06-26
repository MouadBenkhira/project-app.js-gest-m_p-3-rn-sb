import { Heading, Box, Pressable } from 'native-base';
import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';

const Albums = () => {
  return (
    <Box>
      <Heading color='white' textAlign='center' margin='5'>LATEST ALBUMS</Heading>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
        
        <View style={styles.smallImagesContainer}>
          <Pressable onPress={() => console.log('Image 2 clicked')}>
            <Image source={{ uri: 'https://i.pinimg.com/736x/ac/1e/0a/ac1e0a4c5f0ce5acbd1c12ff89990d78.jpg' }} style={styles.smallImage} />
          </Pressable>
          <Pressable onPress={() => console.log('Image 3 clicked')}>
          <Image source={{ uri: 'https://i.pinimg.com/736x/ac/1e/0a/ac1e0a4c5f0ce5acbd1c12ff89990d78.jpg' }} style={styles.smallImage} />
          </Pressable>
          <Pressable onPress={() => console.log('Image 4 clicked')}>
            <Image source={{ uri: 'https://media.architecturaldigest.com/photos/5890e88033bd1de9129eab0a/1:1/w_870,h_870,c_limit/Artist-Designed%20Album%20Covers%202.jpg' }} style={styles.smallImage} />
          </Pressable>
          <Pressable onPress={() => console.log('Image 5 clicked')}>
            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm2G5and1bxXNWV_n-zrmnKy-rJflDGXkig5eljqnJDw&s' }} style={styles.smallImage} />
          </Pressable>
        </View>
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  largeImage: {
    width: 300,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
  },
  smallImagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    justifyContent: 'center', // Optional: Align items in the center horizontally
  },
  smallImage: {
    width: 130,
    height: 130,
    marginRight: 10,
    marginBottom: 10, // Optional: Add some space between rows
    borderRadius: 10,
  },
});

export default Albums;
