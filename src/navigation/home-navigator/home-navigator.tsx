import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { HomeScreen } from '@screens/home'
import { HEADER_STYLE_CONFIG } from '@shared/constants/theme'

const Home = createNativeStackNavigator()

export const HomeNavigator = () => {
  return (
    <Home.Navigator screenOptions={HEADER_STYLE_CONFIG}>
      <Home.Screen
        name="HOME"
        component={HomeScreen}
        options={{ title: 'Products list' }}
      />
    </Home.Navigator>
  )
}
