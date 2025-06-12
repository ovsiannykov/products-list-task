import React, { Dispatch, memo, SetStateAction } from 'react'
import {
  DimensionValue,
  KeyboardType,
  ReturnKeyType,
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'

import { COLORS } from '@shared/constants'

import {
  AutoCapitalizeType,
  InputAutoCompleteType,
  InputContentType,
} from '@shared/types'

import styles from './input.styles'

type OnChangeValueType = (value: string) => void

type InputProps = {
  value?: string
  onChange?: Dispatch<SetStateAction<string>> | OnChangeValueType
  width?: DimensionValue
  keyboardType?: KeyboardType
  textContentType?: InputContentType
  autoComplete?: InputAutoCompleteType
  autoCorrect?: boolean
  multiline?: boolean
  disabled?: boolean
  returnKeyType?: ReturnKeyType
  autoCapitalize?: AutoCapitalizeType
  style?: StyleProp<ViewStyle>
  containerStyle?: StyleProp<ViewStyle>
  inputStyle?: StyleProp<TextStyle>
  allowFontScaling?: boolean
  placeholder?: string
  label?: string
  error?: string
  onBlur?: () => void
}

export const Input = memo(
  ({
    value,
    onChange,
    width = '100%',
    keyboardType,
    textContentType = 'none',
    autoComplete = 'off',
    autoCorrect = false,
    multiline,
    disabled = false,
    style,
    inputStyle,
    containerStyle,
    returnKeyType,
    autoCapitalize,
    allowFontScaling = false,
    placeholder,
    onBlur,
    label,
    error,
    ...otherProps
  }: InputProps) => {
    const opacityValue = disabled ? 0.6 : 1

    return (
      <View
        style={[
          {
            width,
            opacity: opacityValue,
          },
          style,
        ]}
      >
        <View style={styles.label_wrapper}>
          {label?.length && (
            <Text style={{ ...styles.label, opacity: opacityValue }}>
              {label}
            </Text>
          )}
        </View>
        <View style={[styles.input_container, containerStyle]}>
          <TextInput
            style={[styles.input, disabled && styles.isDisabled, inputStyle]}
            value={value}
            onChangeText={onChange}
            placeholderTextColor={COLORS.gray}
            keyboardType={keyboardType || 'default'}
            onBlur={onBlur}
            multiline={multiline}
            autoCorrect={autoCorrect}
            autoComplete={autoComplete}
            textContentType={textContentType}
            selectTextOnFocus={disabled}
            returnKeyType={returnKeyType}
            autoCapitalize={autoCapitalize}
            allowFontScaling={allowFontScaling}
            placeholder={placeholder}
            cursorColor={COLORS.white}
            {...otherProps}
          />
        </View>
        <View style={{ ...styles.line, opacity: disabled ? 0.2 : 0.4 }} />
        <View style={styles.label_wrapper}>
          {error && <Text style={styles.error}>{error}</Text>}
        </View>
      </View>
    )
  }
)
