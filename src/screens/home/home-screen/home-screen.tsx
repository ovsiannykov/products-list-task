import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { SafeAreaView, TouchableOpacity } from 'react-native'

import { COLORS, HIT_SLOP_10 } from '@shared/constants'
import { THomeScreenNavigationProp } from '@shared/types'
import { ProductsList } from '@widgets/products-list'

import PlusIcon from './assets/plus-icon.svg'
import styles from './home-screen.styles'

export const HomeScreen = () => {
  const navigation = useNavigation<THomeScreenNavigationProp>()

  const goToAddProduct = () => {
    navigation.navigate('CREATE_PRODUCT')
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity hitSlop={HIT_SLOP_10} onPress={goToAddProduct}>
          <PlusIcon width={24} height={24} fill={COLORS.white} />
        </TouchableOpacity>
      ),
    })
  }, [])

  return (
    <SafeAreaView style={styles.screen}>
      <ProductsList />
    </SafeAreaView>
  )
}
