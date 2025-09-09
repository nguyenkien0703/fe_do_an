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

      <Layout className="flex pt-16">
        <SidebarLeft />
        <div className="flex-1 px-4">
          <Content {...props} />
        </div>
        <SidebarRight />
      </Layout>
    </Layout>
  )
}
export default WorkspaceLayout
