import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook from React Navigation

const Profile = () => {
  const navigation = useNavigation(); // Initialize navigation

  const goBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <Button onPress={goBack}>Back</Button>
      </View>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <View style={styles.profileHeader}>
            <View style={styles.profileImageContainer}>
              <Card.Cover source={{ uri: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp' }} style={styles.profileImage} />
              
            </View>
            <View style={styles.profileInfo}>
              <Title style={styles.profileName}>Andy Horwitz</Title>
              <Paragraph style={styles.profileLocation}>New York</Paragraph>
            </View>
          </View>
          <View style={styles.stats}>
            <View style={styles.stat}>
              <Paragraph style={styles.statNumber}>253</Paragraph>
              <Paragraph style={styles.statLabel}>songs</Paragraph>
            </View>
            <View style={styles.stat}>
              <Paragraph style={styles.statNumber}>1026</Paragraph>
              <Paragraph style={styles.statLabel}>Followers</Paragraph>
            </View>
            <View style={styles.stat}>
              <Paragraph style={styles.statNumber}>478</Paragraph>
              <Paragraph style={styles.statLabel}>Following</Paragraph>
            </View>
          </View>
          <View style={styles.about}>
            <Title style={styles.aboutTitle}>About</Title>
            <Paragraph style={styles.aboutText}>Web Developer</Paragraph>
            <Paragraph style={styles.aboutText}>Lives in New York</Paragraph>
            <Paragraph style={styles.aboutText}>Photographer</Paragraph>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131212',
  },
  backButtonContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop:20,
    marginLeft:-300,
    fontSize:20
  },
  card: {
    marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: '#131212',
    borderRadius: 10,
  },
  cardContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageContainer: {
    marginRight: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  editProfileButton: {
    marginTop: 10,
    width: 120,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 24,
    color: '#fff',
  },
  profileLocation: {
    fontSize: 16,
    color: '#666',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  about: {
    marginTop: 20,
    justifyContent:'center',
    alignItems: 'center'

  },
  aboutTitle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center'
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#fff',
  },
});

export default Profile;
