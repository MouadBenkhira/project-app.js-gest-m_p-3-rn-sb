import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Add your logic for handling the form submission here
    // For example, you can send a reset password email
    setMessage(`A password reset link has been sent to ${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.description}>Enter your email address below to reset your password.</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title="Reset Password" onPress={handleSubmit} />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#131212'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'white'
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color:'white'

  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color:'white'

  },
  message: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    color: 'green',
  },
});

export default ForgotPassword;
