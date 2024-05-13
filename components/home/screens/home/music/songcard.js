import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icon library

const SongCard = () => {
  // Demo song data
  const song = {
    name: "Demo Song",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfxRSk7dFOjsPOS2D2pX7ecwiiKtpt4fJxMILsBmkGxwzTDUza",
    artist: "Demo Artist"
  };

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.songName}>{song.name}</Text>
      <Image source={{ uri: song.image }} style={styles.songImage} />
      <Text style={styles.artistName}>{song.artist}</Text>
      {/* Progress bar */}
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
      </View>
      {/* Song bar implementation */}
      <View style={styles.songBar}>
        {/* Previous button */}
        <TouchableOpacity style={styles.controlButton}>
          <Icon name="backward" size={20} color="#808080" />
        </TouchableOpacity>
        {/* Play button */}
        <TouchableOpacity style={styles.controlButton}>
          <Icon name="play" size={20} color="#808080" />
        </TouchableOpacity>
        {/* Next button */}
        <TouchableOpacity style={styles.controlButton}>
          <Icon name="forward" size={20} color="#808080" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    backgroundColor: 'transparent', // Set background color to transparent
    backgroundColor: 'linear-gradient(135deg, black 50%, green 50%)', // Linear gradient background
  },
  songName: {
    fontSize: 24, // Change font size
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop:50,
    textAlign: 'center', // Center text
    fontFamily: 'Arial', // Change font family
  },
  songImage: {
    width: '100%',
    height: 400,
    borderRadius: 10,
    marginBottom: 10,
  },
  artistName: {
    fontSize: 20, // Change font size
    marginBottom: 5,
  },
  progressBarContainer: {
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginVertical: 10,
  },
  progressBar: {
    height: '200%',
    backgroundColor: 'green', // Progress bar color
    borderRadius: 5,
    width: '50%', // Initial width of the progress bar (you can adjust this based on the progress)
  },
  songBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  controlButton: {
    padding: 10,
    backgroundColor: 'transparent',
    borderRadius: 5,
  },
  controlButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

});

export default SongCard;
