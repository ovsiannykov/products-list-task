import { api } from '@shared/core'

import { TProduct } from '../types'

export const getProductsRequest = async (): Promise<TProduct[]> => {
  const res = await api.get<TProduct[]>('/products')

  return res.data
}

export const addProductRequest = async (
  product: TProduct
): Promise<TProduct> => {
  const res = await api.post<TProduct>('/products', product)

  return res.data
}

export const updateProductRequest = async (
  id: string,
  data: Partial<TProduct>
): Promise<TProduct> => {
  const res = await api.put<TProduct>(`/products/${id}`, data)

  return res.data
}

export const deleteProductRequest = async (id: string): Promise<void> => {
  await api.delete(`/products/${id}`)
}
