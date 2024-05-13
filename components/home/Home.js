import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import your screens/components
import HomeScreen from './screens/HomeScreen';
import Extract from './screens/Extract';
import Files from './screens/Files';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  
  return (
    <Tab.Navigator
    
      screenOptions={({ route }) => ({
        
        tabBarIcon: ({ focused, color, size }) => {
          
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Extract') {
            iconName = focused ? 'cloud-upload' : 'cloud-upload-outline';
          } else if (route.name === 'Files') {
            iconName = focused ? 'folder' : 'folder-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}
     
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Files" component={Files} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
