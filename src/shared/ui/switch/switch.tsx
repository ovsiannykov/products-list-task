import React, { memo } from 'react'
import { StyleProp, Switch as Switcher, ViewStyle } from 'react-native'

import { COLORS } from '@shared/constants'

type SwitcherProps = {
  isOn: boolean
  handleToggle?: () => void
  style?: StyleProp<ViewStyle>
}

const SWITCHER_COLORS = { false: COLORS.error, true: COLORS.green }

export const Switch = memo(({ isOn, handleToggle, style }: SwitcherProps) => (
  <Switcher
    trackColor={SWITCHER_COLORS}
    thumbColor={COLORS.white}
    ios_backgroundColor={COLORS.error}
    onValueChange={handleToggle}
    value={isOn}
    style={style}
  />
))
