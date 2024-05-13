import { Heading } from 'native-base';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Avatar, Header } from 'react-native-elements';

const Suggest = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/users/all');
      const data = await response.json();
      setUsersData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderUserItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.avatarContainer}>
        <Avatar 
          rounded
          source={{ uri: `http://localhost:8080/api/users/${item.id}/image` }}
          containerStyle={styles.avatar} // Added containerStyle to set the size
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.artistName}>{item.nom} </Text>
      </View>
    </View>
  );

  return (
    <View>
      <Heading color='white' textAlign='center' margin='5'>Suggested ARTISTS</Heading>
      <FlatList
        data={usersData}
        renderItem={renderUserItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        contentContainerStyle={styles.listContainer}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  artistContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  artistImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  artistName: {
    marginTop: 5,
    color:'white',
    marginRight:5,
    textAlign: 'center',
  },
  avatarContainer: {
    marginRight: 10,
  },
  avatar: {
    width: 120, // Set the desired width
    height: 120, // Set the desired height
  },
});

export default Suggest;
