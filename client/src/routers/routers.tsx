import { createBrowserRouter } from "react-router"

import Home from "../pages/user/Home";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    }
]);

export default routers