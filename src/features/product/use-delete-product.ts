import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Alert } from 'react-native'

import { useProducts } from '@entities/product'

export const useDeleteProduct = () => {
  const { deleteProduct } = useProducts()
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
    },
  })

  const deleteWithConfirm = (id: string) => {
    Alert.alert(
      'Delete Product',
      'Are you sure you want to delete this product?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            mutation.mutate(id)
          },
        },
      ],
      { cancelable: true }
    )
  }

  return {
    deleteProduct: deleteWithConfirm,
    isDeleting: mutation.isPending,
  }
}
