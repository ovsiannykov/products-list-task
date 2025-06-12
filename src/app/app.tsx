import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { ErrorProvider } from '@shared/core/error'

import { RootProvider } from './providers/root-provider'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <ErrorProvider error={null}>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView>
          <RootProvider />
        </GestureHandlerRootView>
      </QueryClientProvider>
    </ErrorProvider>
  )
}
