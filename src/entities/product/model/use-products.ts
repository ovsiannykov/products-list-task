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
  const { setProducts, products } = useProductsStore()

  const getProductsErrorTitle = 'Oops... Failed to get products'
  const deleteProductErrorTitle = 'Oops... Failed to delete product'
  const updateProductErrorTitle = 'Oops... Failed to update product'

  const getProducts = useCallback(async () => {
    try {
      const [getProductsError, products] = await to(getProductsRequest())

      if (getProductsError) {
        return bug(getProductsErrorTitle)
      }

      if (products.length) {
        setProducts(products)
      }
    } catch {
      bug(getProductsErrorTitle)
    }
  }, [])

  const deleteProduct = useCallback(
    async (id: string) => {
      try {
        await deleteProductRequest(id)
        setProducts(products?.filter((product) => product.id !== id))
        success('Product deleted successfully')
      } catch {
        bug(deleteProductErrorTitle)
      }
    },
    [getProducts]
  )

  const updateProduct = useCallback(
    async (data: TProduct) => {
      const [err, updatedProduct] = await to(
        updateProductRequest(data.id, data)
      )

      if (err || !updatedProduct) {
        return bug(updateProductErrorTitle)
      }

      setProducts(
        products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        )
      )
    },
    [getProducts]
  )

  return {
    getProducts,
    deleteProduct,
    updateProduct,
  }
}
