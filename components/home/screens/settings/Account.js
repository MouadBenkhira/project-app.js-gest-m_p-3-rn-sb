import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'; // Added Alert
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';

const Account = () => {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  const goBack = () => {
    navigation.goBack();
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
              <Button mode="outlined" color="#000" style={styles.editProfileButton} onPress={selectImage}>
                NEW PIC
              </Button>
            </View>
            <View style={styles.profileInfo}>
              <Title style={styles.profileName}>Andy Horwitz</Title>
              <Paragraph style={styles.profileLocation}>New York</Paragraph>
            </View>
          </View>
       
          <View style={styles.account}>
            <Text style={{ color: 'white', fontSize: 20, marginBottom: 10, fontFamily: 'Arial',marginTop: 20 }}>Account Settings</Text>
            <TextInput
              placeholder="Full Name"
              value={fullName}
              onChangeText={text => setFullName(text)}
              style={{ borderWidth: 2, borderColor: 'gray', margin: 10, padding: 15, width: 250, borderRadius: 20 }}
            />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
              style={{ borderWidth: 2, borderColor: 'gray', margin: 10, padding: 15, width: 250, borderRadius: 20 }}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={text => setPassword(text)}
              style={{ borderWidth: 2, borderColor: 'gray', margin: 10, padding: 15, width: 250, borderRadius: 20 }}
            />
            <TextInput
              placeholder="Gender"
              value={gender}
              onChangeText={text => setGender(text)}
              style={{ borderWidth: 2, borderColor: 'gray', margin: 10, padding: 15, width: 250, borderRadius: 20 }}
            />
          </View>
          <View>
            <Button style={styles.confirmbutton} mode="outlined" onPress={handleConfirmChanges}>
              CONFIRM CHANGES
            </Button>
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
  account:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  confirmbutton:{
    marginTop: 20,
    width: 200,
    textAlign:'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gray',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:'white'
  }
});

export default Account;
