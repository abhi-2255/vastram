import {  createRootRoute, createRoute, Outlet, createRouter } from "@tanstack/react-router";
import Login from "./pages/LoginSignup";
import Home from "./pages/Home";

const rootRoute = createRootRoute ({
    component: () => (
        <>
            <div className="p-4">
                <Outlet />
            </div>
        </>
    )
})
const homeRoute = createRoute({getParentRoute: () => rootRoute, path: "/", component: Home,})
const loginRoute = createRoute({getParentRoute: () => rootRoute, path: "/login", component: Login,})

const routeTree = rootRoute.addChildren([homeRoute,loginRoute])

export const router = createRouter({routeTree})