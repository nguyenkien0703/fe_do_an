import React, { useEffect, useState } from 'react'
import { Button, Input, Checkbox, Form, Row, Col, Spin } from 'antd'
import { useTranslations } from 'next-intl';
import { FormInstance, useForm, useWatch } from 'antd/es/form/Form'
import { EActionStatus } from '@/stores/type';
import { ILoginForm } from './WorkspaceLogin';
import { getDeviceInfo } from '@/utils/deviceInfo';
interface LoginFormProps {
  onFinish: (values: any) => void
  isLoginLoading: boolean
  form: FormInstance<ILoginForm>
}



export const LoginForm: React.FC<LoginFormProps> = ({ onFinish, isLoginLoading, form }) => {
  const [submittable, setSubmittable] = useState(false)
      // Watch all values
      const values = useWatch([], form)
      useEffect(() => {
        form.validateFields({ validateOnly: true }).then(
            () => {
                setSubmittable(true)
            },
            () => {
                setSubmittable(false)
            },
        )
        // eslint-disable-next-line
    }, [values])
      
  const t = useTranslations();

  const handleFormSubmit = async (values: Omit<ILoginForm, 'visitorId' | 'browser' | 'os' | 'ip'>) => {
    const deviceInfoString = await getDeviceInfo()
    const deviceInfo = JSON.parse(deviceInfoString)
    
    const loginData: ILoginForm = {
      ...values,
      visitorId: deviceInfo.visitorId,
      browser: deviceInfo.browser,
      os: deviceInfo.os,
      ip: deviceInfo.ip
    }
    console.log('deviceInfo-----', deviceInfo)
    onFinish(loginData)
  }
  

  
  return (
    <Form
      form={form}
      onFinish={handleFormSubmit}
      layout="vertical"
      requiredMark={false}
    >
      {/* button login gg */}
      <Button
        size="large"
        style={{
          width: '100%',
          height: '60px',
          borderRadius: '16px',
          border: '1px solid #e8f0fe',
          marginBottom: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          fontSize: '16px',
          fontWeight: '500',
          color: '#4285f4',
          backgroundColor: '#f8f9ff',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-1px)'
          e.currentTarget.style.boxShadow =
            '0 4px 12px rgba(66, 133, 244, 0.15)'
          e.currentTarget.style.backgroundColor = '#f0f4ff'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow =
            '0 2px 4px rgba(0, 0, 0, 0.05)'
          e.currentTarget.style.backgroundColor = '#f8f9ff'
        }}
        icon={
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              fill="#4285f4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34a853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#fbbc05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#ea4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
        }
      >
        {t('LOGIN_WITH_GOOGLE')}
      </Button>

      <Form.Item
        label={
          <span
            style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              letterSpacing: '0.3px',
            }}
          >
            {t('YOUR_USER_NAME_OR_EMAIL')}
          </span>
        }
        name="usernameOrEmail"
        rules={[
          {
            required: true,
            message: t('INVALID_USERNAME_OR_EMAIL'), 
          },
        ]}
        className="mb-6"
      >
        <Input
          size="large"
          placeholder={t('PLACE_HOLDER_YOUR_USER_NAME_OR_EMAIL')}
          maxLength={50}
        />
      </Form.Item>

      <Form.Item
        label={
          <span
            style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              letterSpacing: '0.3px',
            }}
          >
          {t('PASSWORD')}
            
          </span>
        }
        name="password"
        rules={[
          { required: true, message: t('INVALID_PASSWORD')},
        ]}
        style={{ marginBottom: '24px' }}
      >
        <Input.Password
          size="large"
          placeholder={t('PLACE_HOLDER_PASSWORD')}
          maxLength={50}
          
        />
      </Form.Item>

      <Row
        justify="space-between"
        align="middle"
        style={{ marginBottom: '32px' }}
      >
        <Col>
          <Form.Item
            name="remember"
            valuePropName="checked"
            style={{ marginBottom: 0 }}
          >
            <Checkbox
              style={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
              }}
            >
              {t('REMEMBER_ME')}
            </Checkbox>
          </Form.Item>
        </Col>
        <Col>
          <a
            href="#"
            style={{
              fontSize: '14px',
              color: '#4f46e5',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = 'underline'
              e.currentTarget.style.color = '#3730a3'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = 'none'
              e.currentTarget.style.color = '#4f46e5'
            }}
          >
            {t('FORGET_PASSWORD')}
          </a>
        </Col>
      </Row>

      <Form.Item>
        <Spin delay={0} spinning={isLoginLoading}>
          <Button
            type="default"
            htmlType="submit"
            size="large"
            className="w-full text-white shadow-sm transition-opacity bg-[#3B87E5] disabled:opacity-60"

            disabled={!submittable}
            
          >
            {t('BTN_LOGIN')}
          </Button>
          
        </Spin>
      </Form.Item>




      
    </Form>
  )
}