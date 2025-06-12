import type { NativeStackScreenProps } from '@react-navigation/native-stack'

import { TProduct } from '@entities/product'

export type THomeStackParamsList = {
  HOME: undefined
  CREATE_PRODUCT: { product?: TProduct } | undefined
}

export type THomeScreenNavigator = NativeStackScreenProps<
  THomeStackParamsList,
  'HOME'
>

export type TCreateProductScreenNavigator = NativeStackScreenProps<
  THomeStackParamsList,
  'CREATE_PRODUCT'
>

export type THomeScreenNavigationProp = THomeScreenNavigator['navigation']

export type TCreateProductScreenNavigationProp =
  TCreateProductScreenNavigator['navigation']

export type TCreateProductScreenRouteProp =
  TCreateProductScreenNavigator['route']
