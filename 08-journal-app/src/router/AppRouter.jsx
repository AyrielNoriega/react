import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../auth/pages';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalPage } from '../journal/pages/JournalPage';
import { JournalRoutes } from '../journal/routes/JournalRoutes';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<JournalPage />} >,
            <Route path="/auth" >
                <Route path="/auth/login" element={<LoginPage />} />
                <Route path="/auth/register" element={<RegisterPage />} />
            </Route>
        </Route>
    )
);


export const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    )
}
