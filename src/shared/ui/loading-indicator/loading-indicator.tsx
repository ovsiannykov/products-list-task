import React, { memo } from 'react'
import { ActivityIndicator, StyleProp, ViewStyle } from 'react-native'

import { COLORS } from '@shared/constants'
import { TColorsType } from '@shared/types'

type LoadingIndicatorProps = {
  size?: 'large' | 'small'
  color?: TColorsType | string
  style?: StyleProp<ViewStyle>
}

export const LoadingIndicator = memo(
  ({ size = 'large', color = COLORS.white, style }: LoadingIndicatorProps) => (
    <ActivityIndicator size={size} color={color} style={style} />
  )
)
