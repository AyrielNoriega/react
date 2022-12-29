import { RouterProvider } from "react-router-dom"
import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"


export const HeroesApp = () => {
    return (
        <AuthProvider>
            <RouterProvider router={AppRouter} />
        </AuthProvider>
    )
}
