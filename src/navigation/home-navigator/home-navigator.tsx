import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {HomeScreen} from '@screens/home';

const Home = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <Home.Navigator>
      <Home.Screen name="HOME" component={HomeScreen} />
    </Home.Navigator>
  );
};
