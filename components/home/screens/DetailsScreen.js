import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Test = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={require('../../../assets/1.jpeg')} // Place your avatar image source here
          style={styles.avatar}
          resizeMode="cover"
        />
        <Text style={styles.stylishName}>John Doe</Text>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Option 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Option 4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Option 5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Option 6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Option 7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.disconnectButton}>
        <Text style={styles.disconnectText}>Disconnect</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 YourApp. All rights reserved.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  disconnectButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  disconnectText: {
    color: '#ffffff',
    fontSize: 18,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  stylishName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  optionsContainer: {
    marginBottom: 20,
  },
  option: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  optionText: {
    fontSize: 18,
    color: '#333333',
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#666666',
  },
});

export default Test;
