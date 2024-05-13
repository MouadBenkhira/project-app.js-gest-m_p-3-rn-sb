// PlayerBar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider'; // Import Slider from @react-native-community/slider
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo vector icons
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icon library


const PlayerBar = ({ song, onNext, onPrevious, isPlaying, onTogglePlay, onClose }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Ionicons name="close" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.songName}>{song ? song.name : ''}</Text>
      <Slider style={styles.slider} />
      <View style={styles.controlsContainer}>
        <TouchableOpacity style={styles.controlButton}>
          <Icon name="backward" size={36} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onTogglePlay}>
          {isPlaying ? (
            <Ionicons name="pause" size={36} color="#fff" />
          ) : (
            <Ionicons name="play" size={36} color="#fff" />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Icon name="forward" size={36} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#333', // Background color for the player bar
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  songName: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 20,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default PlayerBar;
