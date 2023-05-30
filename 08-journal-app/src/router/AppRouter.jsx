import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalPage } from '../journal/pages/JournalPage';
import { JournalRoutes } from '../journal/routes/JournalRoutes';


const router = createBrowserRouter([
    {
        path: "/",
        element: <JournalRoutes />,
    },
    {
        path: "/*",
        element: <Navigate to="/" />,
    },
    {
        path: "/auth/*",
        element: <AuthRoutes />,
    },
]);


export const AppRouter = () => {
    console.log('AppRouter');
    return (
        <RouterProvider router={router} />
    )
}
