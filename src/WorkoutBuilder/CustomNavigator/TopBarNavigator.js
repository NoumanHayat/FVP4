import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import Logger from '../Screens/Logger';
import Plans from '../Screens/Plans';
import Recommendations from '../Screens/Recommendations';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: '#ffff',
        inactiveTintColor: '#ffff',
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: 'bold',
        },
        style: {
          backgroundColor: '#000000',
        },
      }}>
      <Tab.Screen name="Logger" component={Logger} />
      <Tab.Screen name="Plans" component={Plans} />
      <Tab.Screen name="Recommendations" component={Recommendations} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}

export default MyTabs;
