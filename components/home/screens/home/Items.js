import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { Heading } from 'native-base';

export default function TopContributors() {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/users/top-contributors');
        const data = await response.json();
        setContributors(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Fetch data from API when component mounts
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Image source={{ uri: `http://localhost:8080/api/users/${item.id}/image` }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.primaryText}>{item.nom}</Text>
        <Text style={styles.secondaryText}>Number of Songs: {item.nbrSongs}</Text>
      </View>
    </View>
  );

  return (
    <View>
      <Heading color='white' textAlign='center' margin='5'>TOP CONTRIBUTORS</Heading>

      <FlatList
        data={contributors}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()} // Assuming each item has an ID
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  primaryText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryText: {
    fontSize: 14,
    color: '#777',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
  },
});
