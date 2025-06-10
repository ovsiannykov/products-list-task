import React from 'react'
import { SafeAreaView } from 'react-native'

import { ProductsList } from '@widgets/products-list'

import styles from './home-screen.styles'

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ProductsList />
    </SafeAreaView>
  )
}
