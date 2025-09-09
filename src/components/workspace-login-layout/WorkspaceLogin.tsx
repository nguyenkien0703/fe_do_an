import React, { useState } from 'react'
import { Row, Col } from 'antd'
import { LogoSection } from './LogoSection'
import { AccountHistory } from './AccountHistory'
import {  LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'
import { EActionStatus, FetchStatus } from '@/stores/type'
import { useForm } from 'antd/es/form/Form'
import { useTranslations } from 'next-intl'
import { useMutation } from '@tanstack/react-query'
import authApi from '@/api/helper/auth'
import { notification } from 'antd'
import { useAuthLogin } from '@/stores/auth/hooks'
import { setAccessToken, setRefreshToken } from '@/utils/tokenCookies'
import { useRouter } from 'next/navigation'


export interface ILoginForm {
  usernameOrEmail: string
  password: string
  visitorId: string    // FingerprintJS unique ID
    browser: string      // Chrome, Firefox, Safari, Edge
    os: string          // Windows, macOS, Linux, Android, iOS
    ip: string          // Public IP address
  remember: boolean
}



export interface IRegisterForm {
  username: string
  email: string
  phoneNumber: string
  password: string
  deviceInfo: string
}


export const WorkspaceLogin = () => {
  const router = useRouter()
  const [isRegister, setIsRegister] = useState(false)
  const t = useTranslations()
  const {authState, logoutAction, resetStatusAction, updateCurrentUserInfo} = useAuthLogin()
  const [formLogin] = useForm<ILoginForm>()
  const [formRegister] = useForm<IRegisterForm>()

  const [statusLogin, setStatusLogin] = useState(EActionStatus.Idle)
  const [statusRegister, setStatusRegister] = useState(false)


  const {mutateAsync: login, isPending: isLoginLoading} = useMutation({
    mutationFn: (data: ILoginForm) => authApi.signIn(data),
    onSuccess: (response: any) => {
      console.log('response.data.user-----', response.data.user)
      updateCurrentUserInfo(response.data.user)
      setAccessToken(response.data.accessToken)
      setRefreshToken(response.data.refreshToken)
      router.push('/home')
      notification.success({
        message: t('LOGIN_SUCCESS'),
        description: t('LOGIN_SUCCESS_DESCRIPTION'),
        duration: 3,
      })
    },
    onError: (error: any)=> {
      console.log('error login-----', error)
      logoutAction()
      notification.error({
        message:t('ERROR_LOGIN'), 
        description:  error?.response?.data?.message || error?.message || 'Something wrong, try again!',
        duration: 3,
      })
    }
  })
  console.log('authState user -----', authState.userData)
  console.log('isLoginLoading line 67-----', isLoginLoading)

  const onLoginFinish = async (values: ILoginForm) => {
    try {
      await login(values)
      console.log('Login success:', values)
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  const onRegisterFinish = (values: IRegisterForm) => {
    console.log('Register values:', values)
  }


  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <Row style={{ height: '100%' }}>
        <Col span={24} style={{ position: 'relative' }}>
          <LogoSection />
          <AccountHistory />

          <div
            style={{
              position: 'absolute',
              top: '50%',
              right: '80px',
              transform: 'translateY(-50%)',
              background: 'linear-gradient(135deg, #ffffff 0%, #fafbff 100%)',
              borderRadius: '24px',
              padding: isRegister ? '32px' : '40px',
              width: '380px',
              boxShadow:
                '0 32px 64px rgba(79, 172, 254, 0.08), 0 16px 32px rgba(0, 0, 0, 0.04)',
              border: '1px solid rgba(79, 172, 254, 0.1)',
              backdropFilter: 'blur(10px)',
              zIndex: 10,
            }}
          >
            <Row>
              <Col span={24}>
                <div style={{ marginBottom: isRegister ? '30px' : '40px' }}>
                  <div
                    style={{
                      textAlign: 'right',
                      marginBottom: '20px',
                      fontSize: '14px',
                      color: '#64748b',
                    }}
                  >
                    {isRegister ? t('HAVE_ACC') : t('NOT_HAVE_ACC')}{' '}
                    <a
                      href="#"
                      style={{
                        color: '#4f46e5',
                        textDecoration: 'none',
                        fontWeight: '500',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#3730a3'
                        e.currentTarget.style.textDecoration = 'underline'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#4f46e5'
                        e.currentTarget.style.textDecoration = 'none'
                      }}
                      onClick={(e) => {
                        e.preventDefault()
                        setIsRegister(!isRegister)
                      }}
                    >
                      {isRegister ? t('LOGIN') : t('REGISTER')}
                    </a>
                  </div>
                  <div
                    style={{
                      fontSize: '16px',
                      color: '#64748b',
                      marginBottom: '8px',
                      fontWeight: '400',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {t('WELCOME')}
                  </div>
                  <h1
                    style={{
                      fontSize: isRegister ? '36px' : '42px',
                      fontWeight: '700',
                      background:
                        'linear-gradient(135deg, #1e293b 0%, #4f46e5 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      margin: 0,
                      lineHeight: '1.2',
                      letterSpacing: '-0.5px',
                    }}
                  >
                    {isRegister ?  t('REGISTER'): t('LOGIN')}
                  </h1>
                </div>

                {!isRegister ? (
                  <LoginForm onFinish={onLoginFinish}  isLoginLoading={isLoginLoading} form={formLogin}/>
                ) : (
                  <RegisterForm onFinish={onRegisterFinish} isRegisterLoading={statusRegister=== true} form={formRegister}/>
                )}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default WorkspaceLogin