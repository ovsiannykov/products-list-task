import {HomeNavigator} from '@navigation/home-navigator';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

export const App = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};
