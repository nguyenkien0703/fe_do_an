import { combineReducers, createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    initialized: false,
  },
  reducers: {
    setInitialized: (state, action) => {
      state.initialized = action.payload
    },
  },
})

export const { setInitialized } = appSlice.actions

const rootReducer = combineReducers({
  app: appSlice.reducer,
})

export default rootReducer
