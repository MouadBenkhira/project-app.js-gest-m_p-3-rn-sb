import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Pressable, PanResponder } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

const File = () => {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio());
  const [progress, setProgress] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterSongs();
  }, [searchText, songs]);

  useEffect(() => {
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleSongEnd);
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleSongEnd);
    };
  }, [audio]);

  const updateProgress = () => {
    const duration = audio.duration || 0;
    const currentTime = audio.currentTime || 0;
    const calculatedProgress = (currentTime / duration) * 100;
    setProgress(calculatedProgress);
  };

  const handleSongEnd = () => {
    handleNext();
  };

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/songs/all');
      const data = await response.json();
      setSongs(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filterSongs = () => {
    const filtered = songs.filter(song => {
      return song.title.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredSongs(filtered);
  };

  const handleItemClick = (item, index) => {
    setSelectedSong(item);
    setCurrentSongIndex(index);
    playSong(item.id);
  };

  const playSong = async (songId) => {
    try {
      await fetch(`http://localhost:8080/api/songs/${songId}/play`);
      setIsPlaying(true);
      audio.src = `http://localhost:8080/api/songs/${songId}/play`;
      audio.play();
    } catch (error) {
      console.error('Error playing song:', error);
    }
  };

  const handleNext = () => {
    const nextIndex = currentSongIndex + 1;
    if (nextIndex < filteredSongs.length) {
      handleItemClick(filteredSongs[nextIndex], nextIndex);
    }
  };

  const handlePrevious = () => {
    const prevIndex = currentSongIndex - 1;
    if (prevIndex >= 0) {
      handleItemClick(filteredSongs[prevIndex], prevIndex);
    }
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (percentage) => {
    const duration = audio.duration || 0;
    const newPosition = (percentage / 100) * duration;
    audio.currentTime = newPosition;
    setProgress(percentage);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
      </View>
      <FlatList
        data={filteredSongs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => handleItemClick(item, index)}>
            <View style={styles.item}>
              <View style={styles.avatarContainer}>
                <Avatar
                  rounded
                  source={{ uri: `http://localhost:8080/api/songs/${item.id}/image` }}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.songName}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          </Pressable>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      {selectedSong && (
        <FloatingPlayer
          isPlaying={isPlaying}
          onPress={handlePlayPause}
          progress={progress}
          onSeek={handleSeek}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </View>
  );
};

const FloatingPlayer = ({ isPlaying, onPress, progress, onSeek, onNext, onPrevious }) => {
  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {},
      onPanResponderMove: (event, gestureState) => {
        const position = event.nativeEvent.locationX;
        const width = event.nativeEvent.layout.width;
        const percentage = (position / width) * 100;
        onSeek(percentage);
      },
      onPanResponderRelease: () => {},
    })
  ).current;

  return (
    <View style={styles.floatingPlayer}>
      <View style={styles.controlsContainer}>
        <Pressable style={styles.playPauseButton} onPress={onPrevious}>
          <Icon name="skip-previous" type="material" color="#fff" />
        </Pressable>
        <Pressable style={styles.playPauseButton} onPress={onPress}>
          <Icon name={isPlaying ? "pause" : "play-arrow"} type="material" color="#fff" />
        </Pressable>
        <Pressable style={styles.playPauseButton} onPress={onNext}>
          <Icon name="skip-next" type="material" color="#fff" />
        </Pressable>
      </View>
      <View style={styles.progressBarContainer}>
        <View
          style={[styles.progressBar, { width: `${progress}%` }]}
          {...panResponder.panHandlers}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#131212',
  },
  searchBar: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 12,
    color: '#fff',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  songName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
  description: {
    color: '#fff',
  },
  separator: {
    height: 1,
    backgroundColor: '#252323',
    marginVertical: 5,
  },
  floatingPlayer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#333',
    padding: 10,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  playPauseButton: {
    padding: 10,
  },
  progressBarContainer: {
    height: 5,
    backgroundColor: '#555',
    marginTop: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#fff',
  },
});

export default File;
