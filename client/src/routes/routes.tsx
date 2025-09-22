import { createBrowserRouter } from "react-router";

import ErrorPage from "../pages/ErrorPage";

import Home from "../pages/user/Home";
import Episodes from "../pages/user/Episodes";
import PlayVideo from "../pages/user/PlayVideo";

import Login from "../pages/admin/auth/Login";
import Register from "../pages/admin/auth/Register";

import Dashboard from "../pages/admin/Dashboard";
import Accounts from "../pages/admin/Accounts";

import Storys from "../pages/admin/Storys";
import Add_Story from "../pages/admin/story/Add_Story";

import Categorys from "../pages/admin/Categorys";
import Add_Categorys from "../pages/admin/categorys/Add_Categorys";
import Edit_Categorys from "../pages/admin/categorys/Edit_Categorys";
import Delete_Categorys from "../pages/admin/categorys/Delete_Categorys";

import Tags from "../pages/admin/Tags";
import Add_Tags from "../pages/admin/tags/Add_Tags";
import Edit_Tags from "../pages/admin/tags/Edit_Tags";
import Delete_Tags from "../pages/admin/tags/Delete_Tags";

import StoryTags from "../pages/admin/StoryTags";

import StoryEpisode from "../pages/admin/StoryEpisode";

const routes = createBrowserRouter([
  // user page
  { path: "*", element: <ErrorPage /> },
  { path: "/", element: <Home /> },
  { path: "/episodes", element: <Episodes /> },
  { path: "/play", element: <PlayVideo /> },

  // auth admin
  { path: "/admin/login", element: <Login /> },
  { path: "/admin/register", element: <Register /> },

  // admin page
  {
    path: "/admin/dashboard",
    element: <Dashboard />
  },
  {
    path: "/admin/accounts",
    element: <Accounts />
  },
  {
    path: "/admin/categorys",
    element: <Categorys />
  },
  {
    path: "/admin/categorys/add",
    element: <Add_Categorys />
  },
  {
    path: "/admin/categorys/edit/:id",
    element: <Edit_Categorys />
  },
  {
    path: "/admin/categorys/delete/:id",
    element: <Delete_Categorys />
  },
  {
    path: "/admin/tags",
    element: <Tags />
  },
  {
    path: "/admin/tags/add",
    element: <Add_Tags />
  },
  {
    path: "/admin/tags/edit/:id",
    element: <Edit_Tags />
  },
  {
    path: "/admin/tags/delete/:id",
    element: <Delete_Tags />
  },
  {
    path: "/admin/storytags",
    element: <StoryTags />
  },
  {
    path: "/admin/storys",
    element: <Storys />
  },
  {
    path: "/admin/storys/add",
    element: <Add_Story />
  },
  {
    path: "/admin/storys/episode",
    element: <StoryEpisode />
  },
]);

export default routes;
