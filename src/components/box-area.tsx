import { Typography } from 'antd'
import { ReactNode } from 'react'

const { Title } = Typography

interface IBoxArea {
  title?: string
  children: ReactNode
}

const BoxArea = ({ title, children, ...rest }: IBoxArea) => {
  return (
    <div {...rest} className="w-full bg-white">
      <div className="px-6 py-4 shadow-01 max-[470px]:px-3">
        <Title level={5} className="mb-0 font-medium">
          {title}
        </Title>
      </div>
      <div className="p-6 max-[470px]:px-3">{children}</div>
    </div>
  )
}

export default BoxArea
