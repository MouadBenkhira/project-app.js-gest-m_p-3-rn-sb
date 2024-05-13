import axios from 'axios';

// Create a custom Axios instance
const instance = axios.create({
  baseURL: 'http://localhost:8080/api/songs', // Set your base URL here
  timeout: 10000, // Set timeout duration in milliseconds
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers if needed
  },
});

export default instance;
