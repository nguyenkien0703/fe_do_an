import React from 'react'
import { Row, Col, Button, Input, Checkbox, Avatar } from 'antd'
import { GoogleOutlined } from '@ant-design/icons'

export const WorkspaceLogin = () => {
  return (
    <div
      style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      }}
    >
      <Row style={{ height: '100%' }}>
        {/* Left Side - Logo and User Profiles */}
        <Col
          xs={0}
          md={12}
          lg={14}
          style={{ position: 'relative', padding: '40px' }}
        >
          <div style={{ position: 'absolute', top: '80px', left: '80px' }}>
            {/* Zono Logo */}
            <div style={{ marginBottom: '60px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    background:
                      'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '10px',
                  }}
                >
                  <span
                    style={{
                      color: 'white',
                      fontSize: '36px',
                      fontWeight: 'bold',
                    }}
                  >
                    Z
                  </span>
                </div>
                <span
                  style={{
                    color: 'white',
                    fontSize: '48px',
                    fontWeight: 'bold',
                  }}
                >
                  ono
                </span>
              </div>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background:
                    'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: '90px',
                }}
              >
                <span
                  style={{
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 'bold',
                  }}
                >
                  Z
                </span>
              </div>
            </div>

            {/* User Profiles Section */}
            <div style={{ color: 'white' }}>
              <h3
                style={{
                  color: 'white',
                  fontSize: '18px',
                  marginBottom: '24px',
                }}
              >
                Đăng nhập với
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '12px',
                      padding: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      width: '280px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Avatar size={48} src="/api/placeholder/48/48" />
                    <div>
                      <div
                        style={{
                          color: 'white',
                          fontWeight: '500',
                          fontSize: '16px',
                        }}
                      >
                        John peter
                      </div>
                      <div
                        style={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontSize: '14px',
                        }}
                      >
                        Hoạt động 1 ngày trước
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Col>

        {/* Right Side - Login Form */}
        <Col
          xs={24}
          md={12}
          lg={10}
          style={{
            background: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            position: 'relative',
          }}
        >
          <div style={{ width: '100%', maxWidth: '400px' }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <div
                style={{
                  textAlign: 'right',
                  marginBottom: '20px',
                  fontSize: '14px',
                  color: '#666',
                }}
              >
                Chưa có tài khoản ?{' '}
                <a href="#" style={{ color: '#1890ff' }}>
                  Đăng kí
                </a>
              </div>
              <h1
                style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  color: '#000',
                  margin: 0,
                  marginBottom: '32px',
                }}
              >
                Đăng nhập
              </h1>
              <div
                style={{
                  textAlign: 'right',
                  fontSize: '14px',
                  color: '#999',
                  marginBottom: '20px',
                }}
              >
                Chào mừng đến với Zono
              </div>
            </div>

            {/* Google Login Button */}
            <Button
              size="large"
              style={{
                width: '100%',
                height: '50px',
                borderRadius: '12px',
                border: '1px solid #d9d9d9',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
              icon={<GoogleOutlined style={{ fontSize: '18px' }} />}
            >
              <span style={{ fontSize: '16px', fontWeight: '500' }}>
                Đăng nhập với Google
              </span>
            </Button>

            {/* Login Form */}
            <div>
              <div style={{ marginBottom: '20px' }}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#333',
                  }}
                >
                  Username hoặc email của bạn
                </label>
                <Input
                  size="large"
                  placeholder="username hoặc email"
                  style={{
                    borderRadius: '12px',
                    height: '50px',
                    fontSize: '16px',
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#333',
                  }}
                >
                  Mật khẩu
                </label>
                <Input.Password
                  size="large"
                  placeholder="Mật khẩu"
                  style={{
                    borderRadius: '12px',
                    height: '50px',
                    fontSize: '16px',
                  }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '30px',
                }}
              >
                <Checkbox style={{ fontSize: '14px' }}>Nhớ tôi</Checkbox>
                <a href="#" style={{ fontSize: '14px', color: '#1890ff' }}>
                  Quên mật khẩu?
                </a>
              </div>

              <Button
                type="primary"
                size="large"
                style={{
                  width: '100%',
                  height: '50px',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: '600',
                  background: '#1890ff',
                  border: 'none',
                }}
              >
                Đăng nhập
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default WorkspaceLogin
