// frontend/src/app/AppRouter.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header.jsx"
import HomePage from "../pages/HomePage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import Footer from "../components/Footer.jsx";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />

                {/* Page doesn't exist */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}