import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { Toaster } from '@features/toaster'
import { HomeNavigator } from '@navigation/home-navigator'
import { ErrorProvider } from '@shared/core/error'

export const App = () => {
  return (
    <ErrorProvider error={null}>
      <NavigationContainer>
        <HomeNavigator />
        <Toaster />
      </NavigationContainer>
    </ErrorProvider>
  )
}
