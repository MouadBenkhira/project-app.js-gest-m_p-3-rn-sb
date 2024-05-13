import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Extract = () => {
  const [videoLink, setVideoLink] = useState('');
  const [videoUrl, setVideoUrl] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  const handleExtract = () => {
    // Implement video extraction logic here
    // For demonstration purposes, let's assume the video URL is set directly
    setVideoUrl(videoLink);
    setShowVideo(true);
  };

  const handleUpload = () => {
    // Implement file upload logic here
    // For demonstration purposes, let's assume it's handled separately
    console.log('File upload functionality');
    setShowVideo(true);
  };

  return (
    <View style={styles.container}>
      <Heading>Enter a link to extract</Heading>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            placeholder="Paste your video link here..."
            value={videoLink}
            onChangeText={setVideoLink}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleExtract}>
            <Text style={styles.buttonText}>Extract</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleUpload}>
            <Icon name="upload" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={[styles.card, { display: showVideo ? 'flex' : 'none' }]}>
          {videoUrl && (
            <Image source={{ uri: videoUrl }} style={styles.video} />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const Heading = ({ children }) => <Text style={styles.heading}>{children}</Text>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#131212', // Set background color to black
  },
  content: {
    alignItems: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  searchBar: {
    marginTop: '50%',
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'whitesmoke',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontFamily:'Arial'
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginTop: 20,
    width: '80%',
    aspectRatio: 16 / 9,
  },
  video: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default Extract;
