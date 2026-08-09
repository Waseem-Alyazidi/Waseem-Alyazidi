// frontend/src/components/Experience.jsx
import { useHome } from "../contexts/HomeContext.js";

export default function Experience() {
    const { home, loading, error } = useHome();

    if (loading) {
        return (
            <section className="section-experience">
                <div className="section-experience-wrapper">
                    <p className="section-experience-message">
                        Loading...
                    </p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="section-experience">
                <div className="section-experience-wrapper">
                    <p className="section-experience-message">
                        Failed to load data.
                    </p>
                </div>
            </section>
        );
    }

    if (!home?.experience) {
        return (
            <section className="section-experience">
                <div className="section-experience-wrapper">
                    <p className="section-experience-message">
                        Experience content is currently unavailable.
                    </p>
                </div>
            </section>
        );
    }

    const { eyebrow, title, items } = home.experience;

    return (
        <section className="section-experience" id="experience">
            <div className="section-experience-wrapper">
                <div className="section-experience-head">
                    <p className="section-experience-eyebrow">{eyebrow}</p>
                    <h2 className="section-experience-title">{title}</h2>
                </div>

                <div className="section-experience-log">
                    {items.map((item, index) => (
                        <div key={index} className="section-experience-log-entry">
                            <div className="section-experience-meta">
                                <div className="section-experience-version">{item.version}</div>
                                <div className="section-experience-dates">{item.period}</div>
                            </div>
                            <div className="section-experience-detail">
                                <h3 className="section-experience-role">{item.role}</h3>
                                <div className="section-experience-company">{item.company}</div>
                                <ul className="section-experience-commits">
                                    {item.description.map((desc, descIndex) => (
                                        <li key={descIndex} className="section-experience-commit-item">
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}