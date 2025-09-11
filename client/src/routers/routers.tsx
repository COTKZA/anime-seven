import { createBrowserRouter } from "react-router"

import ErrorPage from "../pages/ErrorPage";

import Home from "../pages/user/Home";
import Episodes from "../pages/user/Episodes";
import PlayVideo from "../pages/user/PlayVideo";

import Login from "../pages/admin/auth/Login";
import Dashboard from "../pages/admin/Dashboard";
import Accounts from "../pages/admin/Accounts";
import Categorys from "../pages/admin/Categorys";
import Tags from "../pages/admin/Tags";
import StoryTags from "../pages/admin/StoryTags";
import Storys from "../pages/admin/Storys";
import StoryEpisode from "../pages/admin/StoryEpisode";

const routers = createBrowserRouter([
     {
        path: '*',
        element: <ErrorPage />
    },
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
    },
    {
        path: '/admin/accounts',
        element: <Accounts />
    },
    {
        path: '/admin/categorys',
        element: <Categorys />
    },
    {
        path: '/admin/tags',
        element: <Tags />
    },
    {
        path: '/admin/storytags',
        element: <StoryTags />
    },
    {
        path: '/admin/storys',
        element: <Storys />
    },
    {
        path: '/admin/storys/episode',
        element: <StoryEpisode />
    }
]);

export default routers