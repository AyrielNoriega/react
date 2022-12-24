import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import { LoginPage } from "../auth";
import { DcPage, MarvelPage } from "../heroes";
import { HeroesApp } from '../HeroesApp';


export const AppRouter = createBrowserRouter([
    {
        path: "marvel",
        element: <MarvelPage />,
    },
    {
        path: "dc",
        element: <DcPage />,
    },
    {
        path: "login",
        element: <LoginPage />,
    },
    {
        path: "/",
        element: <Navigate  to="marvel" />,
    },
]);