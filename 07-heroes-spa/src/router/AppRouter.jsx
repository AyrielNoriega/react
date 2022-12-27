import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import { LoginPage, LogoutPage } from "../auth";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../heroes";
import { HeroesApp } from '../HeroesApp';
import { Navbar } from "../ui";


export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children: [
            {
              path: "marvel",
              element: <MarvelPage />,
            },
            {
                path: "dc",
                element: <DcPage />,
            },
            {
                path: "search",
                element: <SearchPage />,
            },
            {
                path: "hero/:id",
                element: <HeroPage />,
            },
        ],
    },
    {
        path: "login",
        element: <LoginPage />,
    },
    {
        path: "logout",
        element: <LogoutPage />,
    },
    {
        path: "/",
        element: <Navigate  to="marvel" />,
    },
]);