import React, { memo, useCallback, useRef } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import SwipeableItem, {
  SwipeableItemImperativeRef,
} from 'react-native-swipeable-item'

import { TProduct } from '@entities/product'
import { COLORS } from '@shared/constants/theme'

import CheckSvg from './assets/check.svg'
import TrashSvg from './assets/trash.svg'
import styles from './product-list-item.styles'

type TProductItemProps = {
  product: TProduct
}

export const ProductListItem = memo(({ product }: TProductItemProps) => {
  const swipeableRef = useRef<SwipeableItemImperativeRef>(null)

  const closeTab = () => {
    swipeableRef.current?.close()
  }

  const ActionsButtons = useCallback(() => {
    return (
      <View style={styles.action_container}>
        <TouchableOpacity
          style={{ ...styles.action_button, backgroundColor: COLORS.error }}
          onPress={closeTab}
        >
          <TrashSvg width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.action_button, backgroundColor: COLORS.blue }}
          onPress={closeTab}
        >
          <CheckSvg width={24} height={24} />
        </TouchableOpacity>
      </View>
    )
  }, [])

  return (
    <SwipeableItem
      ref={swipeableRef}
      item={product}
      renderUnderlayLeft={() => <ActionsButtons />}
      snapPointsLeft={[160]}
    >
      <TouchableOpacity
        onPress={closeTab}
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
    </SwipeableItem>
  )
})
