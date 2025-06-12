import React, { useCallback, useState } from 'react'
import { FlatList, ListRenderItem, RefreshControl } from 'react-native'

import { TProduct, useProducts, useProductsStore } from '@entities/product'
import { COLORS } from '@shared/constants'

import { EmptyScreen, ProductListItem } from './components'

export const ProductsList = () => {
  const { getProducts } = useProducts()
  const { products } = useProductsStore()
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(async () => {
    setRefreshing(true)
    await getProducts()
    setRefreshing(false)
  }, [getProducts])

  const keyExtractor = useCallback((item: TProduct) => item.id, [])

  const renderItem: ListRenderItem<TProduct> = useCallback(
    ({ item }) => <ProductListItem product={item} />,
    []
  )

  return (
    <FlatList
      data={products}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ListEmptyComponent={<EmptyScreen />}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={[COLORS.white]}
          tintColor={COLORS.white}
        />
      }
    />
  )
}
