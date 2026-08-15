// frontend/src/components/About.jsx
import { useHome } from "../contexts/HomeContext";

export default function about() {
    const { home, loading, error } = useHome();

    // Loading state
    if (loading) {
        return (
            <section className="section-about">
                <div className="section-about-wrapper">
                    <p className="section-about-message">
                        Loading...
                    </p>
                </div>
            </section>
        );
    }
    // Error state
    if (error) {
        return (
            <section className="section-about">
                <div className="section-about-wrapper">
                    <p className="section-about-message">
                        Failed to load data.
                    </p>
                </div>
            </section>
        );
    }

    // No data found
    if (!home.data.about) {
        return (
            <section className="section-about">
                <div className="section-about-wrapper">
                    <p className="section-about-message">
                        About content is currently unavailable.
                    </p>
                </div>
            </section>
        )
    }

    const {
        eyebrow,
        title,
        description,
        quote,
        facts,
    } = home.data.about;

    return (
        <section className="section-about" id="about">
            <div className="section-about-wrapper">
                <div className="section-about-layout">

                    {/* Main Content */}
                    <div className="section-about-content">
                        <p className="section-about-eyebrow">
                            {eyebrow}
                        </p>
                        <h2 className="section-about-title">
                            {title}
                        </h2>

                        <div className="section-about-description">
                            {description.map((paragraph, index) => (
                                <p key={index} className="section-about-paragraph">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {quote && (
                            <blockquote className="section-about-quote">
                                "{quote}"
                            </blockquote>
                        )}
                    </div>

                    {/* Side Meta / Facts List */}
                    <div className="section-about-sidebar">
                        <div className="section-about-facts">
                            <ul className="section-about-facts-list">
                                {facts.map((fact, index) => (
                                    <li key={index} className="section-about-fact-item">
                                        <span className="section-about-fact-label">
                                            {fact.label}
                                        </span>
                                        <span className="section-about-fact-value">
                                            {fact.value}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}