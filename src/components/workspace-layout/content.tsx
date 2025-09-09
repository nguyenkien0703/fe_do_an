import { Layout } from 'antd';
import { IWorkspaceLayout } from '.';

const Content = ({ children }: IWorkspaceLayout) => {
  return <div className="min-h-screen py-6">{children}</div>;
};
export default Content;
