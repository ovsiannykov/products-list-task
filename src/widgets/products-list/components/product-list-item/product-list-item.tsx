import React, { useCallback, useRef } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import SwipeableItem, {
  SwipeableItemImperativeRef,
} from 'react-native-swipeable-item'

import { TProduct, useProducts, useProductsStore } from '@entities/product'
import { useDeleteProduct } from '@features/product'
import { COLORS } from '@shared/constants/theme'

import CheckSvg from './assets/check.svg'
import TrashSvg from './assets/trash.svg'
import styles from './product-list-item.styles'

type TProductItemProps = {
  product: TProduct
}

export const ProductListItem = ({ product }: TProductItemProps) => {
  const { updateProduct } = useProducts()
  const { deleteProduct } = useDeleteProduct()
  const storeProduct = useProductsStore((state) =>
    state.products.find((p) => p.id === product.id)
  )
  const swipeableRef = useRef<SwipeableItemImperativeRef>(null)

  const closeTab = () => swipeableRef.current?.close()

  const deleteProductHandler = () => {
    deleteProduct(product.id)
    closeTab()
  }

  const updateProductHandler = () => {
    if (!storeProduct) {
      return
    }

    const newProduct = {
      ...storeProduct,
      bought: !storeProduct.bought,
    }

    updateProduct(newProduct)
    closeTab()
  }

  const ActionsButtons = useCallback(
    () => (
      <View style={styles.action_container}>
        <TouchableOpacity
          style={{ ...styles.action_button, backgroundColor: COLORS.error }}
          onPress={deleteProductHandler}
        >
          <TrashSvg width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.action_button, backgroundColor: COLORS.blue }}
          onPress={updateProductHandler}
        >
          <CheckSvg width={24} height={24} />
        </TouchableOpacity>
      </View>
    ),
    [storeProduct]
  )

  const productToDisplay = storeProduct ?? product

  return (
    <SwipeableItem
      ref={swipeableRef}
      item={productToDisplay}
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
            textDecorationLine: productToDisplay.bought
              ? 'line-through'
              : 'none',
          }}
        >
          {productToDisplay.name}
        </Text>
        <View>
          <Text style={styles.amount}>
            {productToDisplay.amount.toString()}
          </Text>
        </View>
      </TouchableOpacity>
    </SwipeableItem>
  )
}
