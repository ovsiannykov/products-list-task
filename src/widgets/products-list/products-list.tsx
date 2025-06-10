import { useQuery } from '@tanstack/react-query'
import React, { useCallback } from 'react'
import { FlatList, ListRenderItem, RefreshControl, Text } from 'react-native'

import { TProduct, useProducts, useProductsStore } from '@entities/product'

import { ProductListItem } from './components'

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

  if (!products?.length) {
    return <Text style={{ color: 'white' }}>No products found</Text>
  }

  return (
    <FlatList
      data={products}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={isFetching}
          onRefresh={refetch}
          colors={['white']}
          tintColor="white"
        />
      }
    />
  )
}
