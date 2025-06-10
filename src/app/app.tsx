import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

import { Toaster } from '@features/toaster'
import { HomeNavigator } from '@navigation/home-navigator'
import { ErrorProvider } from '@shared/core/error'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <ErrorProvider error={null}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <HomeNavigator />
          <Toaster />
        </NavigationContainer>
      </QueryClientProvider>
    </ErrorProvider>
  )
}
