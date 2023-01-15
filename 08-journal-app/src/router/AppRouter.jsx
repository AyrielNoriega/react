import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../auth/pages';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalPage } from '../journal/pages/JournalPage';
import { JournalRoutes } from '../journal/routes/JournalRoutes';


const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/auth" >
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
    </Route>
    // <Route path="/*" >
    //     <Route path="/" element={<JournalPage />}/>
    //     <Route path="/*" element={<Navigate to="/" />}/>
    // </Route>,
    )
);

export const AppRouter = () => {
    return (
        <RouterProvider router={router} />
        // <Routes>
        //     <Route path="/auth/*" alement={<AuthRoutes />}/>
        //     <Route path="/*" alement={<JournalRoutes />}/>
        // </Routes>
    )
}
