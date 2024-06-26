import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const FileAdd = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack(); // Assuming you're using React Navigation
  };

  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <Button onPress={goBack} title="Back" />
      </View>
      <Text style={styles.heading}>
        Sorry, we are not supporting this type of action right now. Please go to our page to upload it!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  heading: {
    fontFamily: 'Roboto',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default FileAdd;
