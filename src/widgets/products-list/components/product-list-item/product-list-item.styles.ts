import { StyleSheet } from 'react-native'

import { COLORS } from '@shared/constants/theme'

export default StyleSheet.create({
  product_item: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    borderBottomWidth: 1,
  },
  product_name: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  amount: {
    color: COLORS.white,
    fontSize: 16,
  },
})
