import { Heading } from 'native-base';
import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';

const Slide = () => {
  return (
    <View>
                <Heading color='white' textAlign='center' margin='5'>LATEST ITEMS</Heading>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9f2SVdDhlm1DHc0cezuyXtbDqDSAJGhMAvuGCL3OICw&s' }} style={styles.image} />
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7RKs_t7CXVsUjaq1NrfDFnnTHXat6NfyAg&s' }} style={styles.image} />
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbuEwrniD2D82ThYq49yY2pXpulDEuOapWkD7Tw458QQ&s' }} style={styles.image} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  image: {
    width: 300,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
  },
});

export default Slide;
