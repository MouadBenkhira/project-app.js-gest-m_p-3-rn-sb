import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Contact = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
  },
  backButtonText: {
    color: '#007AFF',
    fontSize: 16,
  },
});

export default Contact;
