import { RouterProvider } from "react-router-dom"
import { AppRouter } from "./router/AppRouter"


export const HeroesApp = () => {
    return (
        <>
            <RouterProvider router={AppRouter} />
        </>
    )
}
