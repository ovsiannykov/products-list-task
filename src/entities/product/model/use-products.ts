import to from 'await-to-js'
import { useCallback } from 'react'

import { useErrorContext } from '@shared/core'

import {
  deleteProductRequest,
  getProductsRequest,
  updateProductRequest,
} from '../api'
import { TProduct } from '../types'
import { useProductsStore } from './products-store'

export const useProducts = () => {
  const { bug, success } = useErrorContext()
  const setProducts = useProductsStore((state) => state.setProducts)

  const getProductsErrorTitle = 'Oops... Failed to get products'
  const deleteProductErrorTitle = 'Oops... Failed to delete product'
  const updateProductErrorTitle = 'Oops... Failed to update product'

  const getProducts = useCallback(async () => {
    try {
      const [getProductsError, products] = await to(getProductsRequest())

      if (getProductsError) {
        return bug(getProductsErrorTitle)
      }

      setProducts(products)
    } catch {
      bug(getProductsErrorTitle)
    }
  }, [setProducts])

  const deleteProduct = useCallback(
    async (id: string) => {
      try {
        await deleteProductRequest(id)
        const currentProducts = useProductsStore.getState().products
        setProducts(currentProducts.filter((product) => product.id !== id))
        success('Product deleted successfully')
      } catch {
        bug(deleteProductErrorTitle)
      }
    },
    [setProducts]
  )

  const updateProduct = useCallback(
    async (data: TProduct) => {
      const [err, updatedProduct] = await to(
        updateProductRequest(data.id, data)
      )

      if (err || !updatedProduct) {
        bug(updateProductErrorTitle)

        return
      }

      const currentProducts = useProductsStore.getState().products
      const newProducts = currentProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )

      setProducts(newProducts)
    },
    [setProducts]
  )

  return {
    getProducts,
    deleteProduct,
    updateProduct,
  }
}
