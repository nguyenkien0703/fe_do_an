// import { useConfig } from '@/src/hooks/useConfig';
import { Button } from 'antd'
import { useRouter } from 'next/navigation'

const NotFoundPage = () => {
  const router = useRouter()

  // const { chainConfig } = useConfig();
  return (
    <div className="flex h-screen flex-grow flex-col items-center justify-center bg-gray-50">
      <div className="rounded-lg bg-white p-8 text-center shadow-xl">
        <h1 className="!font-forza mb-4 text-4xl font-bold">404</h1>
        <p className="!font-forza text-gray-600">
          Oops! The page you are looking for could not be found.
        </p>
        <Button
          type="primary"
          onClick={() => {
            router.push(`/`)
          }}
          className="!font-forza mt-4"
        >
          Go back to Home
        </Button>
      </div>
    </div>
  )
}

export default NotFoundPage
