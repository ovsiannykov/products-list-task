import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { TProduct } from '../types'

type ProductsStoreType = {
  products?: TProduct[] | null
  setProducts: (payload: TProduct[] | null) => void
}

export const useProductsStore = create<ProductsStoreType>()(
  devtools(
    (set) => ({
      products: undefined,
      setProducts: (payload) => set({ products: payload }),
    }),
    { name: 'ProductsStore' }
  )
)
