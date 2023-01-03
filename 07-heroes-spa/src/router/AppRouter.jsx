import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import { LoginPage, LogoutPage } from "../auth";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../heroes";
import { HeroesApp } from '../HeroesApp';
import { Navbar } from "../ui";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children: [
            {
              path: "marvel",
              element: <PrivateRoute><MarvelPage /></PrivateRoute>,
            },
            {
                path: "dc",
                element: <PrivateRoute><DcPage /></PrivateRoute>,
            },
            {
                path: "search",
                element: <PrivateRoute><SearchPage /></PrivateRoute>,
            },
            {
                path: "hero/:id",
                element: <PrivateRoute><HeroPage /></PrivateRoute>,
            },
        ],
    },
    {
        path: "login",
        element: <PublicRoute><LoginPage /></PublicRoute>,
    },
    {
        path: "logout",
        element: <PublicRoute><LogoutPage /></PublicRoute>,
    },
    {
        path: "/",
        element: <PublicRoute><Navigate  to="marvel" /></PublicRoute>,
    },
]);