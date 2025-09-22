// import StoryBar from '@/components/story-bar';
// import CreatePost from '@/components/create-post';
// import Post from '@/components/post';
import WorkspaceLoginWrapper from './components/WorkspaceLoginWrapper'

export default function Page() {
  return <WorkspaceLoginWrapper />
}

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'vi' }
  ]
}