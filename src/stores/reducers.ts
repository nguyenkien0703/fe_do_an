import { combineReducers, createSlice } from '@reduxjs/toolkit'

import authReducer from '@/stores/auth/slice'

const rootReducer = combineReducers({
  auth: authReducer,
})

export default rootReducer
