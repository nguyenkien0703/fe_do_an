import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { EActionStatus } from '../type'
import { IAccount, IAuthState } from './type'
import { logout } from '@/utils/tokenCookies'

const initialState: IAuthState = {
  status: EActionStatus.Idle,
  isAuthenticated: false,
  userData: null,
  errorMessage: '',
  errorCode: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut: (state: IAuthState) => {
      ;((state.status = EActionStatus.Idle), (state.isAuthenticated = false))
      state.userData = null
      state.errorMessage = ''
      state.errorCode = ''
      logout()
    },
    currentUser: (state: IAuthState, action: PayloadAction<IAccount | null>) => {
      state.userData = action.payload
    },
    resetStatus: (state: IAuthState) => {
      state.status = EActionStatus.Idle
    },
  },
  extraReducers: (builder) => {},
})

export const {signOut, resetStatus, currentUser} = authSlice.actions
export default authSlice.reducer
