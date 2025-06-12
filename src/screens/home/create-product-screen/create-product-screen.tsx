import React from 'react'
import { View } from 'react-native'

import { EditProductForm } from '@widgets/edit-product-from'

import styles from './create-product-screen.styles'

export const CreateProductScreen = () => {
  return (
    <View style={styles.screen}>
      <EditProductForm />
    </View>
  )
}
