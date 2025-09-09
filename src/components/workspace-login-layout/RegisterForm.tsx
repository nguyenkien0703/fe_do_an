import React, { useEffect, useState } from 'react'
import { Button, Input, Form, Spin, FormInstance } from 'antd'
import { IRegisterForm } from './WorkspaceLogin'
import { useWatch } from 'antd/es/form/Form'
import { useTranslations } from 'next-intl'

interface RegisterFormProps {
  onFinish: (values: any) => void
  isRegisterLoading: boolean
  form: FormInstance<IRegisterForm>
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onFinish,
  isRegisterLoading,
  form,
}) => {
  const t = useTranslations()
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

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      requiredMark={false}
    >
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
            {t('USER_NAME')}
          </span>
        }
        name="username"
        rules={[{ required: true, message: t('INVALID_USERNAME') }]}
        style={{ marginBottom: '20px' }}
      >
        <Input size="large" placeholder={t('PLACE_HOLDER_YOUR_USER_NAME')} />
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
            Email
          </span>
        }
        name="email"
        rules={[
          { required: true, message: t('PLEASE_ENTER_YOUR_EMAIL') },
          { type: 'email', message: 'INVALID_YOUR_EMAIL' },
        ]}
        style={{ marginBottom: '20px' }}
      >
        <Input
          size="large"
          placeholder={t('PLACE_HOLDER_YOUR_EMAIL')}
          type="email"
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
          { required: true, message: t('INVALID_PASSWORD') },
          {
            min: 6,
            message: t('INVALID_PASSWORD_LENGTH'),
          },
        ]}
        style={{ marginBottom: '20px' }}
      >
        <Input.Password
          size="large"
          placeholder={t('PLACE_HOLDER_PASSWORD')}
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
            {t('CONFIRM_PASSWORD')}
          </span>
        }
        name="confirmPassword"
        dependencies={['password']}
        rules={[
          {
            required: true,
            message: t('PLEASE_CONFIRM_PASSWORD'),
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(new Error(t('NOT_MATCH_PASSWORD')))
            },
          }),
        ]}
        style={{ marginBottom: '20px' }}
      >
        <Input.Password
          size="large"
          placeholder={t('PLEASE_CONFIRM_PASSWORD')}
          maxLength={50}
        />
      </Form.Item>

      <Form.Item>
        <Spin delay={0} spinning={isRegisterLoading}>
          <Button
            type="default"
            htmlType="submit"
            size="large"
            className="w-full bg-[#3B87E5] text-white shadow-sm transition-opacity disabled:opacity-60"
            disabled={!submittable}
          >
            {t('BTN_REGISTER')}
          </Button>
        </Spin>
      </Form.Item>
    </Form>
  )
}
