import to from 'await-to-js'
import { useCallback } from 'react'

import { useErrorContext } from '@shared/core'

import {
  addProductRequest,
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
  const addProductErrorTitle = 'Oops... Failed to add product'

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
        return bug(updateProductErrorTitle)
      }

      const currentProducts = useProductsStore.getState().products
      const newProducts = currentProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )

      setProducts(newProducts)
    },
    [setProducts]
  )

  const addProduct = useCallback(
    async (data: TProduct) => {
      const [err, newProduct] = await to(addProductRequest(data))

      if (err || !newProduct) {
        return bug(addProductErrorTitle)
      }

      const currentProducts = useProductsStore.getState().products
      setProducts([...currentProducts, newProduct])
      success('Product added successfully')
    },
    [setProducts]
  )

  return {
    getProducts,
    deleteProduct,
    updateProduct,
    addProduct,
  }
}
