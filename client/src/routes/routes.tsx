import { createBrowserRouter } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import ErrorPage from "../pages/ErrorPage";

// User Pages
import Home from "../pages/user/Home";
import Episodes from "../pages/user/Episodes";
import PlayVideo from "../pages/user/PlayVideo";

// Auth Pages
import Login from "../pages/admin/auth/Login";
import Register from "../pages/admin/auth/Register";

// Admin Pages
import Dashboard from "../pages/admin/Dashboard";
import Accounts from "../pages/admin/Accounts";

import Storys from "../pages/admin/Storys";
import Add_Story from "../pages/admin/story/Add_Story";
import StoryEpisode from "../pages/admin/StoryEpisode";
import ShowStoryTags from "../pages/admin/story/ShowStoryTags";
import Add_StoryTag from "../pages/admin/story/Add_StoryTag";

import Categorys from "../pages/admin/Categorys";
import Add_Categorys from "../pages/admin/categorys/Add_Categorys";
import Edit_Categorys from "../pages/admin/categorys/Edit_Categorys";
import Delete_Categorys from "../pages/admin/categorys/Delete_Categorys";

import Tags from "../pages/admin/Tags";
import Add_Tags from "../pages/admin/tags/Add_Tags";
import Edit_Tags from "../pages/admin/tags/Edit_Tags";
import Delete_Tags from "../pages/admin/tags/Delete_Tags";

import StoryTags from "../pages/admin/StoryTags";



const routes = createBrowserRouter([
  // Public Routes
  { path: "*", element: <ErrorPage /> },
  { path: "/", element: <Home /> },
  { path: "/episodes", element: <Episodes /> },
  { path: "/play", element: <PlayVideo /> },

  // Auth Routes
  { path: "/admin/login", element: <Login /> },
  { path: "/admin/register", element: <Register /> },

  // Protected Admin Routes
  {
    path: "/admin",
    element: <ProtectedRoute requiredRole="admin" />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "accounts",
        element: <Accounts />
      },
      {
        path: "categorys",
        element: <Categorys />
      },
      {
        path: "categorys/add",
        element: <Add_Categorys />
      },
      {
        path: "categorys/edit/:id",
        element: <Edit_Categorys />
      },
      {
        path: "categorys/delete/:id",
        element: <Delete_Categorys />
      },
      {
        path: "tags",
        element: <Tags />
      },
      {
        path: "tags/add",
        element: <Add_Tags />
      },
      {
        path: "tags/edit/:id",
        element: <Edit_Tags />
      },
      {
        path: "tags/delete/:id",
        element: <Delete_Tags />
      },
      {
        path: "storytags",
        element: <StoryTags />
      },
      {
        path: "storys",
        element: <Storys />
      },
      {
        path: "storys/add",
        element: <Add_Story />
      },
      {
        path: "storys/episode/:id",
        element: <StoryEpisode />
      },
      {
        path: "storys/storytag/:id",
        element: <ShowStoryTags />
      },
      {
        path: "storys/storytag/add/:id",
        element: <Add_StoryTag />
      }
    ]
  }
]);

export default routes;
