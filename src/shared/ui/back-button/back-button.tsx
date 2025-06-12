import React, { memo } from 'react'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'

import { COLORS, HIT_SLOP_10 } from '@shared/constants'

import ArrowSvg from './assets/arrow-left.svg'
import styles from './back-button.styles'

interface IBackButtonProps {
  onPress?: () => void
  style?: StyleProp<ViewStyle>
  isMarginLeft?: boolean
  disabled?: boolean
}

export const BackButton = memo(
  ({
    onPress,
    style,
    isMarginLeft = false,
    disabled = false,
  }: IBackButtonProps) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.button,
          isMarginLeft ? styles.indentRight : undefined,
          style,
        ]}
        hitSlop={HIT_SLOP_10}
      >
        <ArrowSvg
          width={28}
          height={28}
          fill={disabled ? COLORS.light_gray : COLORS.white}
        />
      </TouchableOpacity>
    )
  }
)
