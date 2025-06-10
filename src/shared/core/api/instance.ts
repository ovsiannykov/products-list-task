import axios from 'axios'

import { API_URL } from '../env'

export const instance = axios.create({
  baseURL: API_URL,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    mode: 'no-cors',
  },
})
