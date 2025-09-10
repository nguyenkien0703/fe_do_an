'use client'
import { Layout } from 'antd'
import { usePathname } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'
import Content from './content'
import Header from './header'
import SidebarLeft from './sidebar-left'
import SidebarRight from './sidebar-right'
import { useAuthLogin } from '@/stores/auth/hooks'
export interface IWorkspaceLayout {
  children: ReactNode
}

const WorkspaceLayout = (props: IWorkspaceLayout) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      // Client-side-only code
      return !(window.innerWidth > 1280)
    }
    return true
  })

  const [isOpenDraw, setIsOpenDraw] = useState<boolean>(false)
  const { authState } = useAuthLogin()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Layout className="min-h-screen">
      <Header />

      <div
        className="mt-2 flex p-4 pt-16"
        style={{ minHeight: 'calc(100vh - 64px)' }}
      >
        <SidebarLeft />
        <div className="min-w-0 flex-1" style={{ padding: '0 20px' }}>
          <Content {...props} />
        </div>
        <SidebarRight />
      </div>
    </Layout>
  )
}
export default WorkspaceLayout
