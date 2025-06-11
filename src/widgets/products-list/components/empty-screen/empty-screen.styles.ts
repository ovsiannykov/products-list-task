import { StyleSheet } from 'react-native'

import { COLORS, DEVICE_HEIGHT } from '@shared/constants'

export default StyleSheet.create({
  empty_container: {
    marginTop: (DEVICE_HEIGHT / 100) * 18,
    alignItems: 'center',
  },
  title: {
    marginTop: 60,
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.white,
  },
})
