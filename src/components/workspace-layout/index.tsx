'use client'
import { Layout } from 'antd'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import Content from './content'
import Header from './header'
import SidebarLeft from './sidebar-left'
import SidebarRight from './sidebar-right'
export interface IWorkspaceLayout {
  children: ReactNode
}

const WorkspaceLayout = (props: IWorkspaceLayout) => {
  return (
    <Layout className="min-h-screen">
      <Header />

      <div className="flex p-4 pt-16 mt-2" style={{ minHeight: 'calc(100vh - 64px)' }}>
        <SidebarLeft />
        <div className="flex-1 min-w-0" style={{ padding: '0 20px' }}>
          <Content {...props} />
        </div>
        <SidebarRight />
      </div>
    </Layout>
  )
}
export default WorkspaceLayout
