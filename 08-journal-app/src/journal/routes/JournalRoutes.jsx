import { Navigate, Route, Routes } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"

export const JournalRoutes = () => {
    console.log('en journal r');
    return (
        <Routes>
            <Route path="/" element={<JournalPage />}/>
        </Routes>
    )
}
