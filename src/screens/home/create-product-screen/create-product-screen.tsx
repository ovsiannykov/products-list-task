import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'

import { TCreateProductScreenRouteProp } from '@shared/types'
import { EditProductForm } from '@widgets/edit-product-from'

import styles from './create-product-screen.styles'

export const CreateProductScreen = () => {
  const route = useRoute<TCreateProductScreenRouteProp>()
  const product = route?.params?.product

  return (
    <View style={styles.screen}>
      <EditProductForm product={product} />
    </View>
  )
}
