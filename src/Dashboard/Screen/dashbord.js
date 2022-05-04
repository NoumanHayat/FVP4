import * as React from 'react';
import {Text, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import HomeScreen from './Home';
import Profile from './profile';
import customCalories from './customCalories';

import Me from './Me';
import Coach from './Coaching';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      independent={true}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          {
            /* <Entypo name="text-document" size={24} color="black" /> */
          }
          if (route.name === 'MainDashboard') {
            iconName = 'home';
          } else if (route.name === 'Coach') {
            iconName = 'trophy';
          } else if (route.name === 'Profile') {
            iconName = 'text-document';
          } else if (route.name === 'Settings') {
            iconName = 'menu';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
   

      <Tab.Screen name="MainDashboard" component={HomeScreen} />
      <Tab.Screen name="Coach" component={Coach} />
      <Tab.Screen name="Profile" component={Me} />
      <Tab.Screen name="Settings" component={Profile} />
    </Tab.Navigator>
  );
}
