// frontend/src/pages/NotFoundPage.jsx
import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <main className="notfoundpage-main-wrapper">
            <section className="notfoundpage-section section-notfound">
                <div className="notfoundpage-content">
                    <h1 className="notfoundpage-code">404</h1>

                    <h2 className="notfoundpage-title">
                        Page Not Found
                    </h2>

                    <p className="notfoundpage-description">
                        Sorry, the page you're looking for doesn't exist, has been
                        moved, or is temporarily unavailable.
                    </p>

                    <Link
                        to="/"
                        className="notfoundpage-home-button"
                    >
                        Back to Home
                    </Link>
                </div>
            </section>
        </main>
    );
}