import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import { LogoSection } from './LogoSection'
import { AccountHistory } from './AccountHistory'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'
import { VerificationForm } from './VerificationForm'
import { EActionStatus, FetchStatus } from '@/stores/type'
import { useForm } from 'antd/es/form/Form'
import { useTranslations } from 'next-intl'
import { useMutation } from '@tanstack/react-query'
import authApi from '@/api/helper/auth'
import { notification } from 'antd'
import { useAuthLogin } from '@/stores/auth/hooks'
import { setAccessToken, setRefreshToken } from '@/utils/tokenCookies'
import { useRouter } from 'next/navigation'
import { VerificationType } from '@/constant/verifycation-type'
import LanguageSwitcher from '@/components/language-switcher'

export interface IVerificationForm {
  code: string
  type: VerificationType.EMAIL_VERIFICATION
}

export interface ILoginForm {
  usernameOrEmail: string
  password: string
  visitorId: string // FingerprintJS unique ID
  browser: string // Chrome, Firefox, Safari, Edge
  os: string // Windows, macOS, Linux, Android, iOS
  ip: string // Public IP address
  remember: boolean
}

export interface IRegisterForm {
  username: string
  email: string
  password: string
}

export const WorkspaceLogin = () => {
  const router = useRouter()
  const [isRegister, setIsRegister] = useState(false)
  const [isVerification, setIsVerification] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const t = useTranslations()
  const { authState, logoutAction, resetStatusAction, updateCurrentUserInfo } =
    useAuthLogin()
  const [formLogin] = useForm<ILoginForm>()
  const [formRegister] = useForm<IRegisterForm>()
  const [formVerification] = useForm<IVerificationForm>()

  console.log(authState.userData)

  // Test notification on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Testing notification...')
      notification.info({
        message: 'Test Notification',
        description: 'If you see this, notifications are working!',
        placement: 'topRight',
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const { mutateAsync: login, isPending: isLoginLoading } = useMutation({
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
        placement: 'topRight',
        showProgress: true,
      })
    },
    onError: (error: any) => {
      console.log('error login-----', error)
      logoutAction()
      notification.error({
        message: t('ERROR_LOGIN'),
        description:
          error?.response?.data?.message ||
          error?.message ||
          'Có lỗi xảy ra, vui lòng thử lại!',
        duration: 3,
        placement: 'topRight',
        showProgress: true,
      })
    },
  })

  const { mutateAsync: register, isPending: isRegisterLoading } = useMutation({
    mutationFn: (data: IRegisterForm) => authApi.register(data),
    onSuccess: (response: any) => {
      setUserEmail(response.data.user.email)
      setIsRegister(false)
      setIsVerification(true)
      notification.success({
        message: t('REGISTER_SUCCESS'),
        description: 'Mã xác thực đã được gửi đến email của bạn',
        duration: 3,
        placement: 'topRight',
        showProgress: true,
      })
    },
    onError: (error: any) => {
      console.log('error when regiser----', error)
      logoutAction()
      notification.error({
        message: t('ERROR_REGISTER'),
        description:
          error?.response?.data?.message ||
          error?.message ||
          'Có lỗi xảy ra, vui lòng thử lại!',
        duration: 3,
        placement: 'topRight',
        showProgress: true,
      })
    },
  })

  const onLoginFinish = async (values: ILoginForm) => {
    try {
      // Test notification before API call
      notification.info({
        message: 'Đang đăng nhập...',
        description: 'Vui lòng chờ trong giây lát',
        duration: 2,
      })

      await login(values)
      console.log('Login success:', values)
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  const { mutateAsync: verifyEmail, isPending: isVerificationLoading } =
    useMutation({
      mutationFn: (data: IVerificationForm) => authApi.verifyEmail(data),
      onSuccess: () => {
        setIsVerification(false)
        setIsRegister(false)
        notification.success({
          message: t('VERIFY_EMAIL_AFTER_REGISTER_SUCCESS'),
          description: 'VERIFY_EMAIL_AFTER_REGISTER_SUCCESS_DESC',
          duration: 3,
          placement: 'topRight',
          showProgress: true,
        })
      },
      onError: (error: any) => {
        notification.error({
          message: t('ERROR_VERIFY_EMAIL_AFTER_REGISTER'),
          description:
            error?.response?.data?.message ||
            error?.message ||
            'Mã xác thực không đúng!',
          duration: 3,
          placement: 'topRight',
          showProgress: true,
        })
      },
    })

  const onRegisterFinish = async (values: IRegisterForm) => {
    console.log('Register values:', values)
    try {
      await register(values)
      console.log('register success:::::', values)
    } catch (error) {
      console.error('register failed:', error)
    }
  }

  const onVerificationFinish = async (values: IVerificationForm) => {
    try {
      await verifyEmail(values)
      console.log('Verification success:', values)
    } catch (error) {
      console.error('Verification failed:', error)
    }
  }

  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      {/* Language Switcher in top-right corner */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          zIndex: 20,
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          borderRadius: '8px',
          padding: '8px 12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
        }}
      >
        <LanguageSwitcher />
      </div>

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
                    {!isVerification && (
                      <>
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
                      </>
                    )}
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
                      fontSize: isVerification
                        ? '28px'
                        : isRegister
                          ? '36px'
                          : '42px',
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
                    {isVerification
                      ? t('VERIFY')
                      : isRegister
                        ? t('REGISTER')
                        : t('LOGIN')}
                  </h1>
                </div>

                {isVerification ? (
                  <VerificationForm
                    onFinish={onVerificationFinish}
                    isVerificationLoading={isVerificationLoading}
                    form={formVerification}
                    userEmail={userEmail}
                  />
                ) : !isRegister ? (
                  <LoginForm
                    onFinish={onLoginFinish}
                    isLoginLoading={isLoginLoading}
                    form={formLogin}
                  />
                ) : (
                  <RegisterForm
                    onFinish={onRegisterFinish}
                    isRegisterLoading={isRegisterLoading}
                    form={formRegister}
                  />
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
