import React from 'react'
import { Text, View } from 'react-native'

import EmptySvg from './assets/empty.svg'
import styles from './empty-screen.styles'

export function EmptyScreen() {
  return (
    <View style={styles.empty_container}>
      <EmptySvg />
      <Text style={styles.title}>It is empty here for now.</Text>
    </View>
  )
}
