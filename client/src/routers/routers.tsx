import { createBrowserRouter } from "react-router"

import Home from "../pages/user/Home";
import Episodes from "../pages/user/Episodes";
import PlayVideo from "../pages/user/PlayVideo";

import Login from "../pages/admin/auth/Login";
import Dashboard from "../pages/admin/Dashboard";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/episodes',
        element: <Episodes />
    },
    {
        path: '/play',
        element: <PlayVideo />
    },
    {
        path: '/admin/login',
        element: <Login />
    },
    {
        path: '/admin/dashboard',
        element: <Dashboard />
    }
]);

export default routers