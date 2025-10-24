import { RouterProvider } from '@tanstack/react-router'
import { router } from './routes'



export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}


