import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { HomeNavigator } from '@navigation/home-navigator'

export const App = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  )
}
