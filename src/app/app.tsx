import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { Toaster } from '@features/toaster'
import { HomeNavigator } from '@navigation/home-navigator'
import { ErrorProvider } from '@shared/core/error'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <ErrorProvider error={null}>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView>
          <NavigationContainer>
            <StatusBar barStyle="light-content" />
            <HomeNavigator />
            <Toaster />
          </NavigationContainer>
        </GestureHandlerRootView>
      </QueryClientProvider>
    </ErrorProvider>
  )
}
