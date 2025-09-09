import { getAccessToken, getRefreshToken, setAccessToken, setRefreshToken, logout } from '@/utils/tokenCookies'
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import authApi from '../helper/auth'

const client: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  timeout: 1000 * 60 * 60 * 2, // 2 hours
})

export const clientNoneAuth: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  timeout: 1000 * 60 * 60 * 2, // 2 hours
})

export const ACCESS_TOKEN_HEADER_KEY = 'Authorization'
export const REFRESH_TOKEN_HEADER_KEY = 'Authorization-refresh-token'
client.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const accessToken = getAccessToken()
      if (accessToken) {
        config.headers[ACCESS_TOKEN_HEADER_KEY] = `Bearer ${accessToken}`
      }
      return Promise.resolve(config)
    },
    (error: AxiosError) => {
      return Promise.reject(error)
    }
  )


//   function triggerConnect() {
//     store.dispatch(authActions.logout({}))
//     store.dispatch(settingActions.toggleConnectModal(true))
//   }
client.interceptors.response.use(
    (response: AxiosResponse) => {
      return response
    },
    async (error: any) => {
      const originalRequest = error.config
      const status = error?.response?.status
      if (status === 401 && !originalRequest?._retry) {
        const refreshToken = getRefreshToken()
        if (refreshToken) {
          try {
            const dataToken = await authApi.refresh({
              [ACCESS_TOKEN_HEADER_KEY]: `Bearer ${refreshToken}`
            })
            client.defaults.headers.common[ACCESS_TOKEN_HEADER_KEY] = `Bearer ${dataToken?.accessToken}`
            setAccessToken(dataToken?.accessToken)
            setRefreshToken(dataToken?.refreshToken)
  
            return client(originalRequest)
          } catch (e) {
            logout()
            return Promise.reject(e)
          }
        } else {
          logout()
        }
      }
      return Promise.reject(error)
    }
  )
  export default client
  