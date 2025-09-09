import React from 'react'
import { Row, Col, Button, Input, Checkbox, Avatar } from 'antd'
import { GoogleOutlined, CloseOutlined } from '@ant-design/icons'

export const WorkspaceLogin = () => {
  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <Row style={{ height: '100%' }}>
        {/* Main Content Area */}
        <Col span={24} style={{ position: 'relative' }}>
          {/* Top White Section with Logo */}
          <Row style={{ height: '60%' }}>
            <Col span={24} style={{ background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '80px', paddingRight: '80px', overflow: 'visible' }}>
              <div style={{ textAlign: 'left' }}>
                {/* Zono Text Logo */}
                <div style={{ marginBottom: '20px' }}>
                  <span
                    style={{
                      fontSize: '180px',
                      fontWeight: '900',
                      background: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 50%, #1d4ed8 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      lineHeight: '0.8',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      letterSpacing: '-2px',
                      display: 'inline-block',
                    }}
                  >
                    Zono
                  </span>
                </div>
                {/* Small Z icon below */}
                <div style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '220px' }}>
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      background: '#4096ff',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{
                        color: 'white',
                        fontSize: '28px',
                        fontWeight: 'bold',
                      }}
                    >
                      Z
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          {/* Bottom Blue Section with Account History */}
          <Row style={{ height: '40%' }}>
            <Col span={24} style={{ background: '#1890ff', padding: '40px 60px', position: 'relative' }}>
              <div style={{ color: 'white' }}>
                <h3
                  style={{
                    color: 'black',
                    fontSize: '20px',
                    marginBottom: '30px',
                    fontWeight: '600',
                  }}
                >
                  Đăng nhập với
                </h3>
                <Row gutter={4}>
                  {[1, 2, 3].map((item) => (
                    <Col key={item} xs={8} sm={8} md={6} lg={6} xl={6}>
                      <div
                        style={{
                          background: 'white',
                          borderRadius: '12px',
                          padding: '16px 12px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          marginBottom: '16px',
                          position: 'relative',
                          width: '100%',
                          maxWidth: '200px',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)'
                          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)'
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      >
                        {/* Close button */}
                        <div
                          style={{
                            position: 'absolute',
                            top: '8px',
                            right: '8px',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: '#f5f5f5',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#e6e6e6'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#f5f5f5'
                          }}
                          onClick={(e) => {
                            e.stopPropagation()
                          }}
                        >
                          <CloseOutlined style={{ fontSize: '10px', color: '#999' }} />
                        </div>

                        {/* Avatar */}
                        <Avatar size={48} src="/api/placeholder/48/48" style={{ marginBottom: '12px' }} />
                        
                        {/* User Info */}
                        <div style={{ textAlign: 'center' }}>
                          <div
                            style={{
                              color: '#000',
                              fontWeight: '600',
                              fontSize: '14px',
                              marginBottom: '2px',
                              lineHeight: '1.2',
                            }}
                          >
                            John peter
                          </div>
                          <div
                            style={{
                              color: '#999',
                              fontSize: '12px',
                              lineHeight: '1.2',
                            }}
                          >
                            Hoạt động 1 ngày trước
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>

          {/* Floating Login Form */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              right: '80px',
              transform: 'translateY(-50%)',
              background: 'white',
              borderRadius: '24px',
              padding: '40px',
              width: '420px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              zIndex: 10,
            }}
          >
            <Row>
              <Col span={24}>
                {/* Header */}
                <div style={{ marginBottom: '40px' }}>
                  <div
                    style={{
                      textAlign: 'right',
                      marginBottom: '20px',
                      fontSize: '14px',
                      color: '#999',
                    }}
                  >
                    Chưa có tài khoản ?{' '}
                    <a href="#" style={{ color: '#1890ff', textDecoration: 'none' }}>
                      Đăng kí
                    </a>
                  </div>
                  <div
                    style={{
                      fontSize: '16px',
                      color: '#999',
                      marginBottom: '8px',
                    }}
                  >
                    Chào mừng đến với Zono
                  </div>
                  <h1
                    style={{
                      fontSize: '48px',
                      fontWeight: '700',
                      color: '#000',
                      margin: 0,
                      lineHeight: '1.2',
                    }}
                  >
                    Đăng nhập
                  </h1>
                </div>

                {/* Google Login Button */}
                <Button
                  size="large"
                  style={{
                    width: '100%',
                    height: '56px',
                    borderRadius: '12px',
                    border: '1px solid #e8f0fe',
                    marginBottom: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#1a73e8',
                    backgroundColor: '#f8f9ff',
                    boxShadow: 'none',
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
                  Đăng nhập với Google
                </Button>

                {/* Login Form */}
                <Row>
                  <Col span={24}>
                    <div style={{ marginBottom: '24px' }}>
                      <label
                        style={{
                          display: 'block',
                          marginBottom: '8px',
                          fontSize: '15px',
                          fontWeight: '500',
                          color: '#000',
                        }}
                      >
                        Username hoặc email của bạn
                      </label>
                      <Input
                        size="large"
                        placeholder="username hoặc email"
                        style={{
                          borderRadius: '12px',
                          height: '52px',
                          fontSize: '16px',
                          border: '1px solid #d9d9d9',
                          backgroundColor: '#fafafa',
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                      <label
                        style={{
                          display: 'block',
                          marginBottom: '8px',
                          fontSize: '15px',
                          fontWeight: '500',
                          color: '#000',
                        }}
                      >
                        Mật khẩu
                      </label>
                      <Input.Password
                        size="large"
                        placeholder="Mật khẩu"
                        style={{
                          borderRadius: '12px',
                          height: '52px',
                          fontSize: '16px',
                          border: '1px solid #d9d9d9',
                          backgroundColor: '#fafafa',
                        }}
                      />
                    </div>

                    <Row justify="space-between" align="middle" style={{ marginBottom: '28px' }}>
                      <Col>
                        <Checkbox style={{ fontSize: '14px' }}>Nhớ tôi</Checkbox>
                      </Col>
                      <Col>
                        <a href="#" style={{ fontSize: '14px', color: '#1890ff', textDecoration: 'none' }}>
                          Quên mật khẩu?
                        </a>
                      </Col>
                    </Row>

                    <Button
                      type="primary"
                      size="large"
                      style={{
                        width: '100%',
                        height: '52px',
                        borderRadius: '12px',
                        fontSize: '16px',
                        fontWeight: '600',
                        background: '#1890ff',
                        border: 'none',
                        boxShadow: 'none',
                      }}
                    >
                      Đăng nhập
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default WorkspaceLogin
