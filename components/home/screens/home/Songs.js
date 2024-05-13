import { Heading, Box, Pressable } from 'native-base';
import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native';

const Songs = () => {
  const [latestSongs, setLatestSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
    const fetchLatestSongs = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/songs/latest');
        if (!response.ok) {
          throw new Error('Failed to fetch latest songs');
        }
        const data = await response.json();
        setLatestSongs(data);
      } catch (error) {
        console.error('Error fetching latest songs:', error.message);
      }
    };

    fetchLatestSongs();
  }, []);

  const handleImageClick = (song) => {
    setSelectedSong(song);
  };

  const closeModal = () => {
    setSelectedSong(null);
  };

  return (
    <Box>
      <Heading color='white' textAlign='center' margin='5'>LATEST SONGS</Heading>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
        <View style={styles.smallImagesContainer}>
          {latestSongs.map((song) => (
            <Pressable key={song.id} onPress={() => handleImageClick(song)}>
              <View>
                <Image source={{ uri: `http://localhost:8080/api/songs/${song.id}/image` }} style={styles.smallImage} />
                <Text style={styles.title}>{song.title}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={selectedSong !== null}
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Image source={{ uri: `http://localhost:8080/api/songs/${selectedSong?.id}/image` }} style={styles.modalImage} />
            <Text style={styles.songTitle}>{selectedSong?.title}</Text>
            <Text style={styles.songDescription}>{selectedSong?.description}</Text>
            <Text style={styles.songDuration}>Duration: {selectedSong?.duration}</Text>
          </View>
        </View>
      </Modal>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
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
  title: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(19,18,18,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
    width: '80%',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  songTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  songDescription: {
    marginBottom: 5,
    fontSize: 18,
  },
  songDuration: {
    marginBottom: 10,
    fontSize: 16,
  },
});

export default Songs;
