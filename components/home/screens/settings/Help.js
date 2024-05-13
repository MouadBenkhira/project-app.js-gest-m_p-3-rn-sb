import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';

const Help = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const FAQ = [
    {
      question: 'Question 1?',
      answer: 'Answer to question 1.',
    },
    {
      question: 'Question 2?',
      answer: 'Answer to question 2.',
    },
    {
      question: 'Question 3?',
      answer: 'Answer to question 3.',
    },
    {
      question: 'Question 4?',
      answer: 'Answer to question 4.',
    },
    {
      question: 'Question 5?',
      answer: 'Answer to question 5.',
    },
  ];

  const handleCardPress = (index) => {
    if (selectedCard === index) {
      setSelectedCard(null);
    } else {
      setSelectedCard(index);
    }
  };

  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.returnButton}>
        <Text style={styles.returnButtonText}>Return</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>Frequently Asked Questions !</Text>
      {FAQ.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.card, selectedCard === index && styles.selectedCard]}
          onPress={() => handleCardPress(index)}>
          <Text style={styles.question}>{item.question}</Text>
          {selectedCard === index && <Text style={styles.answer}>{item.answer}</Text>}
        </TouchableOpacity>
      ))}
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131212',
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    fontFamily: 'Arial',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    marginBottom: 10,
    borderRadius: 10,
    width: 350,
  },
  selectedCard: {
    backgroundColor: '#EDEDED',
  },
  question: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  answer: {
    color: '#333333',
  },
  returnButton: {
    marginTop: 20,
    marginLeft:-320,
    paddingVertical: 10,
    paddingHorizontal: 20,
    
    
  },
  returnButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Help;
