import { RouterProvider, createRouter, createRoute, createRootRoute, Link, Outlet } from '@tanstack/react-router'
import Home from './pages/Home'
import Login from './pages/LoginSignup'
import OtpForm from './pages/Otp'


const RootLayout: React.FC = () => (
  <div>
    <nav style={{ marginBottom: 12 }}>
      <Link to="/">Home</Link> | <Link to="/login">Login</Link> | {" "}
      <Link to="/otp">OTP</Link>
    </nav>
    <Outlet />
  </div>
)

const rootRoute = createRootRoute({
  component: RootLayout,
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home
})
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login
})
const otpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/otp",
  component: OtpForm
})

const routeTree = rootRoute.addChildren([homeRoute,loginRoute,otpRoute])
const router = createRouter({
  routeTree,
})


export default function App() {
  return (
    <RouterProvider router={router} />
  )
}


