import { useCallback } from "react"
import { RootState, useAppDispatch, useAppSelector } from ".."
import { resetStatus, signOut } from "./slice"
import { IAuthState } from "./type"



type AuthLoginType = {
    authState: IAuthState
    logoutAction: () => void
    resetStatusAction: () => void
}



export const useAuthLogin = (): AuthLoginType=> {
    const dispatch = useAppDispatch()
    const authState = useAppSelector((state: RootState) => state.auth)


    const logoutAction = useCallback(() => {
        dispatch(signOut())
    }, [dispatch])

    const resetStatusAction = useCallback(() => {
        dispatch(resetStatus())
    }, [dispatch])


    return {
        authState,
        logoutAction, 
        resetStatusAction
    }
}

