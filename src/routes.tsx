import {  createRootRoute, createRoute, Outlet, createRouter } from "@tanstack/react-router";
import Login from "./pages/Login";
import Home from "./pages/Home";
import OtpForm from "./pages/Otp";
import Product from "./pages/Product";
import Signup from "./pages/Signup";
import adminHome from "./pages/AdminHome"
import adminLogin from "./pages/adminLogin";
import adminProduct from "./pages/adminProduct"

const rootRoute = createRootRoute ({
    component: () => (
        <>
            <div className="p-4">
                <Outlet/>
            </div>
        </>
    )
})

const homeRoute = createRoute({getParentRoute: () => rootRoute, path: "/", component: Home,})
const loginRoute = createRoute({getParentRoute: () => rootRoute, path: "/login", component: Login,})
const signupRoute = createRoute({getParentRoute: ()=> rootRoute, path: "/signup", component: Signup})
const otpRoute = createRoute({getParentRoute: ()=> rootRoute, path: "/otp", component: OtpForm,})
const productRoute = createRoute({getParentRoute: ()=> rootRoute, path: "/product", component: Product})
const adminRoute = createRoute({getParentRoute: ()=>rootRoute,path:"/admin",component: adminHome})
const adminlogRoute = createRoute({getParentRoute:()=>rootRoute, path:"/adminlog",component:adminLogin})
const adminProdRoute = createRoute({getParentRoute:()=>rootRoute, path:"/product-manage",component: adminProduct})

const routeTree = rootRoute.addChildren([homeRoute,loginRoute,signupRoute,otpRoute,productRoute,
    adminRoute,adminlogRoute,adminProdRoute
])

export const router = createRouter({routeTree})