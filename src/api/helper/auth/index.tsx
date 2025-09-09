import instance, { clientNoneAuth } from '@/api/instances'



interface AuthParams {
    address: string
    signature: string
  }

const authApi = {
    async signIn(params: AuthParams) {
        return instance.post(`/auth/sign-in`, params).then((res: any) => res.data)
    },
    async refresh(headers: any) {
        return clientNoneAuth
          .post(`/auth/refresh`, null, {
            headers
          })
          .then((res: any) => res.data)
      }

}


export default authApi