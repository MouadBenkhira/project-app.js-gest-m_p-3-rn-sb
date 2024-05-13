import { Heading, Box, Pressable } from 'native-base';
import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';

const Albums = () => {
  return (
    <Box>
      <Heading color='white' textAlign='center' margin='5'>LASTEST ALBUMS</Heading>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
        
        <View style={styles.smallImagesContainer}>
          <Pressable onPress={() => console.log('Image 2 clicked')}>
            <Image source={{ uri: 'https://i.pinimg.com/736x/ac/1e/0a/ac1e0a4c5f0ce5acbd1c12ff89990d78.jpg' }} style={styles.smallImage} />
          </Pressable>
          <Pressable onPress={() => console.log('Image 3 clicked')}>
            <Image source={{ uri: 'data:image/jpeg;base64,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' }} style={styles.smallImage} />
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
    marginTop: 10,
  },
  smallImage: {
    width: 130,
    height: 130,
    marginRight: 10,
    borderRadius: 10,
  },
});

export default Albums;
