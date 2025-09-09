// import StoryBar from '@/components/story-bar';
// import CreatePost from '@/components/create-post';
// import Post from '@/components/post';
'use client'

import WorkspaceLogin from '@/components/workspace-login-layout/WorkspaceLogin'

// import WorkspaceLogin from '@/components/workspace-login'

// export default function Home() {
//   const samplePosts = [
//     {
//       id: '1',
//       author: {
//         name: 'Cameron Williamson',
//         avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Cameron',
//         time: '23 Aug at 4:21 PM'
//       },
//       content: 'Good morning',
//       images: [
//         'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=300&fit=crop',
//         'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=500&h=300&fit=crop'
//       ],
//       likes: 20,
//       comments: 20,
//       shares: 10
//     },
//     {
//       id: '2',
//       author: {
//         name: 'TyLiphu',
//         avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TyLiphu',
//         time: '22 Aug at 7:15 PM'
//       },
//       content:
//         'Just finished an amazing project! Excited to share it with you all soon. 🚀',
//       images: [
//         'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop'
//       ],
//       likes: 45,
//       comments: 12,
//       shares: 5
//     }
//   ];

//   return (
//     <div className="py-6 mx-auto max-w-2xl">
//       <StoryBar />
//       <CreatePost />
//       <div className="space-y-6">
//         {samplePosts.map((post) => (
//           <Post
//             key={post.id}
//             {...post}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

export default WorkspaceLogin
