import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const SettingsScreen = () => {
  const navigation = useNavigation(); 

  const navigateToProfile = () => {
    navigation.navigate('Profile'); 
  };

  const navigateToAccount = () => {
    navigation.navigate('Account'); 
  };

  const navigateToAdd = () => {
    navigation.navigate('Add'); 
  };

  const navigateToHelp = () => {
    navigation.navigate('Help'); 
  };

  const navigateToContact = () => {
    navigation.navigate('Contact'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={require('../../../assets/1.jpeg')} 
          style={styles.avatar}
          resizeMode="cover"
        />
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option} onPress={navigateToProfile}> 
          <Text style={styles.optionText}>Profile</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.option} onPress={navigateToAccount}>
          <Text style={styles.optionText}>Account</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.option} onPress={navigateToAdd}>
          <Text style={styles.optionText}>Add Song</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.option} onPress={navigateToHelp}>
          <Text style={styles.optionText}>Help Center</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.option} onPress={navigateToContact}>
          <Text style={styles.optionText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.disconnectButton}>
        <Text style={styles.disconnectText}>Disconnect</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 YourApp. All rights reserved.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131212',
    paddingHorizontal: 20,
    paddingTop: 20,
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
  optionsContainer: {
    marginBottom: 20,
  },
  option: {
    paddingVertical: 15,
  },
  optionText: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Times New Roman' 
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#131212',
  },
  disconnectButton: {
    backgroundColor: 'whitesmoke',
    paddingVertical: 15,
    marginTop: 10,   
    alignItems: 'center',
    borderRadius: 100,
    marginBottom: 20,
  },
  disconnectText: {
    color: 'black',
    fontSize: 18,
  },
  footer: {
    marginTop: 100,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#666666',
  },
});

export default SettingsScreen;
