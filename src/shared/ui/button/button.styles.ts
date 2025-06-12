import { StyleSheet } from 'react-native'

import { COLORS } from '@shared/constants'

export default StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftAdornment: {
    maxWidth: 30,
    maxHeight: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  rightAdornment: {
    maxWidth: 30,
    maxHeight: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
  },
  text: {
    marginHorizontal: 8,
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: '600',
  },
})
