import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'react-native'

import { useProducts } from '@entities/product'
import { Toaster } from '@features/toaster'
import { HomeNavigator } from '@navigation/home-navigator'
import { useWakeUp } from '@shared/hooks'

export const RootProvider = () => {
  const { getProducts } = useProducts()

  useWakeUp(getProducts)

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <HomeNavigator />
      <Toaster />
    </NavigationContainer>
  )
}
