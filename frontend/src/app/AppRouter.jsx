// frontend/src/app/AppRouter.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header.jsx"
import HomePage from "../pages/HomePage.jsx";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}