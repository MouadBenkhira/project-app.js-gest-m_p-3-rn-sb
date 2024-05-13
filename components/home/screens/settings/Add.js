import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const FileAdd = () => {
  

  return (
    <View style={styles.container}>
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
  heading: {
    fontFamily: 'Roboto',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  webview: {
    flex: 1,
    width: '100%',
    marginTop: 20,
    backgroundColor: '#fff', // Set a background color for the WebView container
  },
});

export default FileAdd;
