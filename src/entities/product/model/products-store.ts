import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { TProduct } from '../types'

type ProductsStoreType = {
  products: TProduct[]
  setProducts: (payload: TProduct[]) => void
}

export const useProductsStore = create<ProductsStoreType>()(
  devtools(
    (set) => ({
      products: [],
      setProducts: (payload) => set({ products: payload }),
    }),
    { name: 'ProductsStore' }
  )
)
