import Config from 'react-native-config'

export const IS_DEV = __DEV__
export const API_URL = Config.API_URL || process.env.API_URL || ''
