import React, {
  ReactNode,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  DimensionValue,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'

import { COLORS } from '@shared/constants/theme'

import { TColorsType } from '@shared/types'
import { LoadingIndicator } from '@shared/ui'

import styles from './button.styles'

interface ButtonProps {
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  width?: DimensionValue | undefined
  height?: DimensionValue | undefined
  disabled?: boolean
  onPress?: () =>
    | void
    | ReactNode
    | Promise<void>
    | Promise<() => void>
    | Promise<ReactNode>
    | Promise<unknown>
  fontSize?: number
  children?: ReactNode | string
  loading?: boolean
  style?: StyleProp<ViewStyle>
  contentBoxStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  color?: TColorsType | string
  variant?: 'small' | 'big'
  numberOfLines?: number
  textOpacity?: boolean
}

export const Button = memo(
  ({
    startAdornment,
    endAdornment,
    width = '100%',
    height,
    disabled = false,
    onPress,
    fontSize = 20,
    children,
    loading = false,
    style,
    contentBoxStyle,
    textStyle,
    color,
    variant = 'big',
    textOpacity,
  }: ButtonProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(loading)
    const mountStatusRef = useRef(true)
    const isBig = variant === 'big'
    const heightSize = isBig ? 56 : 45
    const colorValue = isBig ? COLORS.blue : COLORS.error

    const isDisabled = disabled || isLoading
    const opacityValue = textOpacity ? 1 : isDisabled ? 0.6 : 1

    const buttonHandler = async () => {
      if (onPress) {
        const handlerValue: unknown = onPress()

        if (handlerValue instanceof Promise) {
          setIsLoading(true)

          await handlerValue

          if (mountStatusRef.current) {
            setIsLoading(false)
          }
        }
      }
    }

    useEffect(() => {
      mountStatusRef.current = true

      return () => {
        mountStatusRef.current = false
      }
    }, [])

    useEffect(() => {
      setIsLoading(loading)
    }, [loading])

    const content = useCallback(() => {
      if (isLoading) {
        return (
          <View style={[styles.content, contentBoxStyle]}>
            <LoadingIndicator size="small" color={COLORS.white} />
          </View>
        )
      }

      if (typeof children === 'string') {
        return (
          <View
            style={[
              styles.content,
              contentBoxStyle,
              { opacity: textOpacity ? (isDisabled ? 0.3 : 1) : undefined },
            ]}
          >
            {startAdornment && (
              <View style={styles.leftAdornment}>{startAdornment}</View>
            )}

            <Text
              style={[styles.text, textStyle, { fontSize }]}
              numberOfLines={1}
            >
              {children}
            </Text>

            {endAdornment && (
              <View style={styles.rightAdornment}>{endAdornment}</View>
            )}
          </View>
        )
      }

      return children
    }, [
      children,
      endAdornment,
      fontSize,
      isLoading,
      startAdornment,
      textStyle,
      contentBoxStyle,
      isDisabled,
    ])

    return (
      <TouchableOpacity
        onPress={buttonHandler}
        disabled={isDisabled}
        style={[
          {
            width,
            height: height ?? heightSize,
            backgroundColor: color || colorValue,
            opacity: opacityValue,
            borderRadius: isBig ? 16 : 50,
          },
          styles.button,
          style,
        ]}
      >
        {content()}
      </TouchableOpacity>
    )
  }
)
