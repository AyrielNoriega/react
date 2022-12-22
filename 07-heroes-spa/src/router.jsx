import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { HeroesApp } from './HeroesApp';


export const router = createBrowserRouter([
            {
                path: "/",
                element: <HeroesApp />,
            },
        ]);