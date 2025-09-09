import React from 'react'
import { Row, Col, Button, Input, Checkbox, Avatar } from 'antd'
import { GoogleOutlined } from '@ant-design/icons'

export const WorkspaceLogin = () => {
  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <Row style={{ height: '100%' }}>
        {/* Main Content Area */}
        <Col span={24} style={{ position: 'relative' }}>
          {/* Top White Section with Logo */}
          <Row style={{ height: '60%' }}>
            <Col span={24} style={{ background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                {/* Zono Text Logo */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span
                    style={{
                      fontSize: '180px',
                      fontWeight: '900',
                      color: '#4096ff',
                      lineHeight: '0.8',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      letterSpacing: '-8px',
                    }}
                  >
                    Zono
                  </span>
                </div>
                {/* Small Z icon below */}
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
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
                    color: 'white',
                    fontSize: '20px',
                    marginBottom: '30px',
                    fontWeight: '600',
                  }}
                >
                  Đăng nhập với
                </h3>
                <Row gutter={20}>
                  {[1, 2, 3].map((item) => (
                    <Col key={item} xs={24} sm={8} md={8} lg={6} xl={6}>
                      <div
                        style={{
                          background: 'rgba(255, 255, 255, 0.15)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: '16px',
                          padding: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '15px',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          marginBottom: '16px',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
                        }}
                      >
                        <Avatar size={56} src="/api/placeholder/56/56" />
                        <div>
                          <div
                            style={{
                              color: 'white',
                              fontWeight: '600',
                              fontSize: '16px',
                              marginBottom: '4px',
                            }}
                          >
                            John peter
                          </div>
                          <div
                            style={{
                              color: 'rgba(255, 255, 255, 0.8)',
                              fontSize: '13px',
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
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                  <div
                    style={{
                      textAlign: 'right',
                      marginBottom: '16px',
                      fontSize: '14px',
                      color: '#666',
                    }}
                  >
                    Chưa có tài khoản ?{' '}
                    <a href="#" style={{ color: '#1890ff', textDecoration: 'none' }}>
                      Đăng kí
                    </a>
                  </div>
                  <h1
                    style={{
                      fontSize: '32px',
                      fontWeight: 'bold',
                      color: '#000',
                      margin: 0,
                      marginBottom: '8px',
                    }}
                  >
                    Đăng nhập
                  </h1>
                  <div
                    style={{
                      fontSize: '14px',
                      color: '#999',
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
                    height: '52px',
                    borderRadius: '12px',
                    border: '1px solid #d9d9d9',
                    marginBottom: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    fontSize: '15px',
                    fontWeight: '500',
                  }}
                  icon={<GoogleOutlined style={{ fontSize: '18px' }} />}
                >
                  Đăng nhập với Google
                </Button>

                {/* Login Form */}
                <Row>
                  <Col span={24}>
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
                          height: '48px',
                          fontSize: '15px',
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
                          height: '48px',
                          fontSize: '15px',
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
                        height: '48px',
                        borderRadius: '12px',
                        fontSize: '16px',
                        fontWeight: '600',
                        background: '#1890ff',
                        border: 'none',
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
