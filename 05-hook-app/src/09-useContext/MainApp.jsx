import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { UseProvider } from './context/UseProvider';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { Navbar } from './Navbar';

const router = createBrowserRouter([
    {
      path: "/",
      element:  <HomePage />,
    },
    {
      path: "/about",
      element:  <AboutPage />,
    },
    {
      path: "/login",
      element:  <LoginPage />,
    },
    {
      path: "/*",
      element:  <Navigate to="/about"/>,
    },
  ]);
  

export const MainApp = () => {
  return (
    <UseProvider>
        <h1>MainApp</h1>
        <hr />
        <RouterProvider router={router} />
    </UseProvider>
  )
}
