'use client';
import { Layout } from 'antd';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import Content from './content';
import Header from './header';
import SidebarLeft from './sidebar-left';
import SidebarRight from './sidebar-right';

export interface IWorkspaceLayout {
  children: ReactNode;
}

const WorkspaceLayout = (props: IWorkspaceLayout) => {
  const pathname = usePathname();
  const currentPath = pathname?.split('/');

  if (currentPath && currentPath.length < 2) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex pt-16">
        <SidebarLeft />
        <div className="flex-1 px-4">
          <Content {...props} />
        </div>
        <SidebarRight />
      </div>
    </div>
  );
};
export default WorkspaceLayout;
