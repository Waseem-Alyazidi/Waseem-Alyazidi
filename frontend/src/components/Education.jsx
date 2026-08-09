// frontend/src/components/Education.jsx
import { useHome } from "../contexts/HomeContext.js";

export default function Education() {
    const { home, loading, error } = useHome();

    if (loading) {
        return (
            <section className="section-education">
                <div className="section-education-wrapper">
                    <p className="section-education-message">
                        Loading...
                    </p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="section-education">
                <div className="section-education-wrapper">
                    <p className="section-education-message">
                        Failed to load data.
                    </p>
                </div>
            </section>
        );
    }

    if (!home?.education) {
        return (
            <section className="section-education">
                <div className="section-education-wrapper">
                    <p className="section-education-message">
                        Education content is currently unavailable.
                    </p>
                </div>
            </section>
        );
    }

    const { eyebrow, title, items } = home.education;

    return (
        <section className="section-education" id="education">
            <div className="section-education-wrapper">
                <div className="section-education-head">
                    <p className="section-education-eyebrow">{eyebrow}</p>
                    <h2 className="section-education-title">{title}</h2>
                </div>

                <div className="section-education-list">
                    {items.map((item, index) => (
                        <div key={index} className="section-education-item">
                            <div className="section-education-main">
                                <h3 className="section-education-role">{item.degree}</h3>
                                <div className="section-education-org">{item.institution}</div>
                            </div>
                            <div className="section-education-when">{item.period}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}