// frontend/src/components/Certificates.jsx
import { useHome } from "../contexts/HomeContext.js";

export default function Certificates() {
    const { home, loading, error } = useHome();

    if (loading) {
        return (
            <section className="section-certificates">
                <div className="section-certificates-wrapper">
                    <p className="section-certificates-message">
                        Loading...
                    </p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="section-certificates">
                <div className="section-certificates-wrapper">
                    <p className="section-certificates-message">
                        Failed to load data.
                    </p>
                </div>
            </section>
        );
    }

    if (!home.data.certificates) {
        return (
            <section className="section-certificates">
                <div className="section-certificates-wrapper">
                    <p className="section-certificates-message">
                        Certificates content is currently unavailable.
                    </p>
                </div>
            </section>
        );
    }

    const { eyebrow, title, items } = home.data.certificates;

    return (
        <section className="section-certificates" id="certificates">
            <div className="section-certificates-wrapper">
                <div className="section-certificates-head">
                    <p className="section-certificates-eyebrow">{eyebrow}</p>
                    <h2 className="section-certificates-title">{title}</h2>
                </div>

                <div className="section-certificates-grid">
                    {items.map((cert, index) => (
                        <div key={index} className="section-certificates-card">
                            <div className="section-certificates-badge">
                                {/* TODO: Icon will added later */}
                            </div>
                            <div className="section-certificates-info">
                                <h3 className="section-certificates-name">{cert.title}</h3>
                                <div className="section-certificates-issuer">{cert.issuer}</div>
                                <div className="section-certificates-year">{cert.issueDate}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}