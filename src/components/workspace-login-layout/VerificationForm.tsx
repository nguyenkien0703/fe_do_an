import { Button, Form, FormInstance, Input, Spin } from 'antd'
import { useWatch } from 'antd/es/form/Form'
import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'
import { IVerificationForm } from './WorkspaceLogin'
import { VerificationType } from '@/constant/verifycation-type'


interface VerificationFormProps {
  onFinish: (values: IVerificationForm) => void
  isVerificationLoading: boolean
  form: FormInstance<IVerificationForm>
  userEmail: string
}

export const VerificationForm: React.FC<VerificationFormProps> = ({ 
  onFinish, 
  isVerificationLoading, 
  form,
  userEmail 
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
  }, [values, form])


  const handleVerifyFormSubmit = async (values: Omit<IVerificationForm,'type'>)=> {
    const verifyFormData: IVerificationForm = {
      ...values,
      type: VerificationType.EMAIL_VERIFICATION
    }
    console.log('verifyFormData::::', verifyFormData)
    onFinish(verifyFormData)
  }

  return (
    <Form
      form={form}
      onFinish={handleVerifyFormSubmit}
      layout="vertical"
      requiredMark={false}
    >
      <div style={{ marginBottom: '24px', textAlign: 'center' }}>
        <p style={{ 
          fontSize: '14px', 
          color: '#64748b',
          margin: 0,
          lineHeight: '1.5'
        }}>
          {t('WE_HAVE_SEND_CODE_TO_YOUR_EMAIL')}
        </p>
        <p style={{ 
          fontSize: '14px', 
          color: '#1e293b',
          fontWeight: '600',
          margin: '4px 0 0 0'
        }}>
          {userEmail}
        </p>
      </div>

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
            {t('CODE')}
          </span>
        }
        name="code"
        rules={[
          { required: true, message: t('PLEASE_ENTER_CODE') },
          { 
            pattern: /^[0-9]{6}$/,
            message: t('INVALID_FORMAT_CODE')
          }
        ]}
        style={{ marginBottom: '32px' }}
      >
        <Input
          size="large"
          placeholder={t('PLACE_HOLDER_ENTER_CODE')}
          maxLength={6}
          style={{
            textAlign: 'center',
            fontSize: '18px',
            letterSpacing: '4px'
          }}
        />
      </Form.Item>

      <Form.Item>
        <Spin delay={0} spinning={isVerificationLoading}>
          <Button
            type="default"
            htmlType="submit"
            size="large"
            className="w-full text-white shadow-sm transition-opacity bg-[#3B87E5] disabled:opacity-60"
            disabled={!submittable}
          >
            {t("SEND_CODE")}
          </Button>
        </Spin>
      </Form.Item>
    </Form>
  )
}