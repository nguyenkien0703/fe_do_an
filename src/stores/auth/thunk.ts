import { createAsyncThunk } from '@reduxjs/toolkit'
import { FetchError } from '../type'
import { ILoginResponse } from './type'
import { AxiosError } from 'axios'

// export const login = createAsyncThunk<
//     ILoginResponse,
//     ILoginRequest,
//     {
//         rejectValue: FetchError
//     }
// >('auth/login', async (loginData, { rejectWithValue }) => {
//     try {
//         const loginResponse: ILoginResponse = await serviceUser.login(loginData)
//         const { userData, accessToken, refreshToken } = loginResponse
//         serviceUser.storeInfo(userData)
//         serviceUser.storeAccessToken(accessToken)
//         serviceUser.storeRefreshToken(refreshToken)
//         return loginResponse
//     } catch (error) {
//         const err = error as AxiosError
//         const responseData: any = err.response?.data
//         return rejectWithValue({
//             errorMessage: responseData?.info.message,
//             errorCode: responseData?.code,
//         })
//     }
// })
