/* eslint-disable */
import { Layout } from 'antd'
import { IWorkspaceLayout } from '.'

const Content = ({ children }: IWorkspaceLayout) => {
  return <div className="py-6 min-h-screen">{children}</div>
}
export default Content
