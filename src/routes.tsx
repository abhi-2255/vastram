import {  createRootRoute, createRoute, Outlet, createRouter } from "@tanstack/react-router";
import Login from "./pages/Login";
import Home from "./pages/Home";
import OtpForm from "./pages/Otp";
import Product from "./pages/Product";

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
const otpRoute = createRoute({getParentRoute: ()=> rootRoute, path: "/otp", component: OtpForm})
const productRoute = createRoute({getParentRoute: ()=> rootRoute, path: "/product", component: Product})

const routeTree = rootRoute.addChildren([homeRoute,loginRoute,otpRoute,productRoute])

export const router = createRouter({routeTree})