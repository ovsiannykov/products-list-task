import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { FlatList, RefreshControl, Text, View } from 'react-native'

import { useProducts, useProductsStore } from '@entities/product'

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

  if (!products?.length) {
    return <Text style={{ color: 'white' }}>No products found</Text>
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{ padding: 12, borderBottomWidth: 1 }}>
          <Text>{item.name}</Text>
          <Text>Amount: {item.amount}</Text>
          <Text>Bought: {item.bought ? '✅' : '❌'}</Text>
        </View>
      )}
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
