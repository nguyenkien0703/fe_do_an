/* eslint-disable */
'use client';
import { Layout } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import Content from './content';
import Footer from './footer';
import Header from './header';

export interface IWorkspaceLayout {
  children: ReactNode;
}

const WorkspaceLayout = (props: IWorkspaceLayout) => {
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = pathname?.split('/');

  if (currentPath && currentPath.length < 2) {
    return null;
  }

  return (
    <Layout className="min-h-screen">
      <Header />
      <Layout className="mt-12">
        <Content {...props} />
      </Layout>
      <Footer />
    </Layout>
  );
};
export default WorkspaceLayout;
