import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { HomeScreen } from '@screens/home'
import { CreateProductScreen } from '@screens/home/create-product-screen'
import { HEADER_STYLE_CONFIG } from '@shared/constants/theme'
import { THomeStackParamsList } from '@shared/types'

const Home = createNativeStackNavigator<THomeStackParamsList>()

export const HomeNavigator = () => {
  return (
    <Home.Navigator screenOptions={HEADER_STYLE_CONFIG}>
      <Home.Screen
        name="HOME"
        component={HomeScreen}
        options={{ title: 'Products list' }}
      />
      <Home.Screen name="CREATE_PRODUCT" component={CreateProductScreen} />
    </Home.Navigator>
  )
}
