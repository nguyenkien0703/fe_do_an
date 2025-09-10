import React from 'react'
import { Row, Col } from 'antd'

export const LogoSection: React.FC = () => {
  return (
    <Row style={{ height: '60%' }}>
      <Col
        span={24}
        style={{
          background: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingLeft: '80px',
          paddingRight: '80px',
          overflow: 'visible',
        }}
      >
        <div style={{ textAlign: 'left' }}>
          <div style={{ marginBottom: '20px' }}>
            <span
              style={{
                fontSize: '180px',
                fontWeight: '900',
                background:
                  'linear-gradient(135deg, #7c3aed 0%, #3b82f6 50%, #1d4ed8 100%)',
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              marginLeft: '220px',
            }}
          >
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
  )
}
