import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { DcPage } from "../heroes/pages/DcPage";
import { MarvelPage } from "../heroes/pages/MarvelPage";
import { HeroesApp } from '../HeroesApp';
import { Navbar } from "../ui";


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