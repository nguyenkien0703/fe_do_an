import React from 'react'
import { Button, Input, Form, Spin, FormInstance } from 'antd'
import { IRegisterForm } from './WorkspaceLogin'

interface RegisterFormProps {
  onFinish: (values: any) => void
  isRegisterLoading: boolean
  form: FormInstance<IRegisterForm>
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onFinish , isRegisterLoading}) => {
  const [form] = Form.useForm()

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
            Username
          </span>
        }
        name="username"
        rules={[
          { required: true, message: 'Vui lòng nhập username!' },
        ]}
        style={{ marginBottom: '20px' }}
      >
        <Input
          size="large"
          placeholder="Nhập username..."
          style={{
            borderRadius: '14px',
            height: '52px',
            fontSize: '15px',
            border: '2px solid #e5e7eb',
            backgroundColor: '#f9fafb',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.02)',
          }}
          onFocus={(e) => {
            e.target.style.border = '2px solid #4f46e5'
            e.target.style.backgroundColor = '#ffffff'
            e.target.style.boxShadow =
              '0 4px 12px rgba(79, 70, 229, 0.1)'
          }}
          onBlur={(e) => {
            e.target.style.border = '2px solid #e5e7eb'
            e.target.style.backgroundColor = '#f9fafb'
            e.target.style.boxShadow =
              '0 2px 4px rgba(0, 0, 0, 0.02)'
          }}
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
            Email
          </span>
        }
        name="email"
        rules={[
          { required: true, message: 'Vui lòng nhập email!' },
          { type: 'email', message: 'Email không hợp lệ!' },
        ]}
        style={{ marginBottom: '20px' }}
      >
        <Input
          size="large"
          placeholder="Nhập email của bạn..."
          type="email"
          style={{
            borderRadius: '14px',
            height: '52px',
            fontSize: '15px',
            border: '2px solid #e5e7eb',
            backgroundColor: '#f9fafb',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.02)',
          }}
          onFocus={(e) => {
            e.target.style.border = '2px solid #4f46e5'
            e.target.style.backgroundColor = '#ffffff'
            e.target.style.boxShadow =
              '0 4px 12px rgba(79, 70, 229, 0.1)'
          }}
          onBlur={(e) => {
            e.target.style.border = '2px solid #e5e7eb'
            e.target.style.backgroundColor = '#f9fafb'
            e.target.style.boxShadow =
              '0 2px 4px rgba(0, 0, 0, 0.02)'
          }}
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
            Mật khẩu
          </span>
        }
        name="password"
        rules={[
          { required: true, message: 'Vui lòng nhập mật khẩu!' },
          {
            min: 6,
            message: 'Mật khẩu phải có ít nhất 6 ký tự!',
          },
        ]}
        style={{ marginBottom: '20px' }}
      >
        <Input.Password
          size="large"
          placeholder="Nhập mật khẩu..."
          style={{
            borderRadius: '14px',
            height: '52px',
            fontSize: '15px',
            border: '2px solid #e5e7eb',
            backgroundColor: '#f9fafb',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.02)',
          }}
          onFocus={(e) => {
            e.target.style.border = '2px solid #4f46e5'
            e.target.style.backgroundColor = '#ffffff'
            e.target.style.boxShadow =
              '0 4px 12px rgba(79, 70, 229, 0.1)'
          }}
          onBlur={(e) => {
            e.target.style.border = '2px solid #e5e7eb'
            e.target.style.backgroundColor = '#f9fafb'
            e.target.style.boxShadow =
              '0 2px 4px rgba(0, 0, 0, 0.02)'
          }}
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
            Xác nhận mật khẩu
          </span>
        }
        name="confirmPassword"
        dependencies={['password']}
        rules={[
          {
            required: true,
            message: 'Vui lòng xác nhận mật khẩu!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(
                new Error('Mật khẩu xác nhận không khớp!'),
              )
            },
          }),
        ]}
        style={{ marginBottom: '20px' }}
      >
        <Input.Password
          size="large"
          placeholder="Xác nhận mật khẩu..."
          style={{
            borderRadius: '14px',
            height: '52px',
            fontSize: '15px',
            border: '2px solid #e5e7eb',
            backgroundColor: '#f9fafb',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.02)',
          }}
          onFocus={(e) => {
            e.target.style.border = '2px solid #4f46e5'
            e.target.style.backgroundColor = '#ffffff'
            e.target.style.boxShadow =
              '0 4px 12px rgba(79, 70, 229, 0.1)'
          }}
          onBlur={(e) => {
            e.target.style.border = '2px solid #e5e7eb'
            e.target.style.backgroundColor = '#f9fafb'
            e.target.style.boxShadow =
              '0 2px 4px rgba(0, 0, 0, 0.02)'
          }}
        />
      </Form.Item>

      <Form.Item style={{ marginTop: '20px' }}>
        <Spin delay={0} spinning={isRegisterLoading}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{
              width: '100%',
              height: '56px',
              borderRadius: '14px',
              fontSize: '16px',
              fontWeight: '700',
              background:
                'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
              border: 'none',
              boxShadow: '0 8px 20px rgba(79, 70, 229, 0.25)',
              transition: 'all 0.3s ease',
              letterSpacing: '0.5px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow =
                '0 12px 24px rgba(79, 70, 229, 0.35)'
              e.currentTarget.style.background =
                'linear-gradient(135deg, #3730a3 0%, #1e1b4b 100%)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow =
                '0 8px 20px rgba(79, 70, 229, 0.25)'
              e.currentTarget.style.background =
                'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)'
            }}
          >
            ✨ Đăng ký
          </Button>

        </Spin>
      </Form.Item>
    </Form>
  )
}