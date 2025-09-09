import { useCallback } from 'react'
import { RootState, useAppDispatch, useAppSelector } from '..'
import { currentUser, resetStatus, signOut } from './slice'
import { IAccount, IAuthState } from './type'

type AuthLoginType = {
  authState: IAuthState
  logoutAction: () => void
  resetStatusAction: () => void
  updateCurrentUserInfo: (userData: IAccount | null) => void
}

export const useAuthLogin = (): AuthLoginType => {
  const dispatch = useAppDispatch()
  const authState = useAppSelector((state: RootState) => state.auth)

  const logoutAction = useCallback(() => {
    dispatch(signOut())
  }, [dispatch])

  const resetStatusAction = useCallback(() => {
    dispatch(resetStatus())
  }, [dispatch])

  const updateCurrentUserInfo = useCallback(
    (userData: IAccount | null) => {
      dispatch(currentUser(userData))
    },
    [dispatch],
  )

  return {
    authState,
    logoutAction,
    resetStatusAction,
    updateCurrentUserInfo,
  }
}
