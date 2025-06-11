import { useQuery } from '@tanstack/react-query'
import React, { useCallback } from 'react'
import { FlatList, ListRenderItem, RefreshControl } from 'react-native'

import { TProduct, useProducts, useProductsStore } from '@entities/product'

import { COLORS } from '@shared/constants'

import { EmptyScreen, ProductListItem } from './components'

export const ProductsList = () => {
  const { getProducts } = useProducts()
  const { products } = useProductsStore()
  const { refetch, isFetching } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      await getProducts()

      return []
    },
    refetchOnWindowFocus: false,
  })

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
          refreshing={isFetching}
          onRefresh={refetch}
          colors={[COLORS.white]}
          tintColor={COLORS.white}
        />
      }
    />
  )
}
