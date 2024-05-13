import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/home/Home';
import LoginScreen from './components/login/Login';
import RegisterScreen from './components/login/Register';
import ForgotPasswordScreen from './components/login/ForgotPassword';
import Profile from './components/home/screens/settings/Profile';
import Account from './components/home/screens/settings/Account';
import Add from './components/home/screens/settings/Add';
import Bca from './components/home/screens/settings/Bca';
import Contact from './components/home/screens/settings/Contact';
import Help from './components/home/screens/settings/Help';
import SongCard from './components/home/screens/home/music/songcard';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          <Stack.Screen name="Profile" component={Profile} /> 
          <Stack.Screen name="Bca" component={Bca} /> 
          <Stack.Screen name="Contact" component={Contact} /> 
          <Stack.Screen name="Help" component={Help} /> 
          <Stack.Screen name="Add" component={Add} /> 
          <Stack.Screen name="Account" component={Account} /> 
          <Stack.Screen name="SongCard" component={SongCard} />

        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
