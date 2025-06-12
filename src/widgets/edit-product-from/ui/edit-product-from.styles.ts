import { StyleSheet } from 'react-native'

import { COLORS } from '@shared/constants'

export default StyleSheet.create({
  form_input: {
    marginBottom: 12,
  },
  switch_container: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  switch_title: {
    fontSize: 18,
    color: COLORS.light_gray,
    fontWeight: '500',
    marginRight: 16,
  },
})
