import to from 'await-to-js'
import { useCallback } from 'react'

import { useErrorContext } from '@shared/core'

import { getProductsRequest } from '../api'
import { useProductsStore } from './products-store'

export const useProducts = () => {
  const { bug } = useErrorContext()
  const { setProducts } = useProductsStore()

  const getProductsErrorTitle = 'Oops... Failed to get products'

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

  return { getProducts }
}
