import { StyleSheet } from 'react-native'

import { COLORS } from '@shared/constants/theme'

export default StyleSheet.create({
  input_container: {
    minHeight: 40,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 8,
    fontSize: 14,
    color: COLORS.white,
  },
  isDisabled: {
    opacity: 0.6,
  },
  label_wrapper: {
    width: '100%',
    height: 20,
  },
  label: {
    color: COLORS.light_gray,
  },
  line: {
    width: '100%',
    height: 0.8,
    marginBottom: 8,
    backgroundColor: COLORS.light_gray,
  },
  error: {
    color: COLORS.error,
  },
})
