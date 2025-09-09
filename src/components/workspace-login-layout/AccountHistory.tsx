import React from 'react'
import { Row, Col, Avatar } from 'antd'
import { CloseOutlined } from '@ant-design/icons'

export const AccountHistory: React.FC = () => {
  return (
    <Row style={{ height: '40%' }}>
      <Col
        span={24}
        style={{
          background: '#1890ff',
          padding: '40px 60px',
          position: 'relative',
        }}
      >
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
                    e.currentTarget.style.boxShadow =
                      '0 4px 12px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
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
                    <CloseOutlined
                      style={{ fontSize: '10px', color: '#999' }}
                    />
                  </div>

                  <Avatar
                    size={48}
                    src="/api/placeholder/48/48"
                    style={{ marginBottom: '12px' }}
                  />

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
  )
}
