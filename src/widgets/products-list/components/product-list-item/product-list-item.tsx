import React, { memo } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { TProduct } from '@entities/product'

import { COLORS } from '@shared/constants/theme'

import styles from './product-list-item.styles'

type TProductItemProps = {
  product: TProduct
}

export const ProductListItem = memo(({ product }: TProductItemProps) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.product_item,
        borderColor: COLORS.stroke,
      }}
    >
      <Text
        style={{
          ...styles.product_name,
          textDecorationLine: product.bought ? 'line-through' : 'none',
        }}
      >
        {product.name}
      </Text>
      <View>
        <Text style={styles.amount}>{product.amount.toString()}</Text>
      </View>
    </TouchableOpacity>
  )
})
