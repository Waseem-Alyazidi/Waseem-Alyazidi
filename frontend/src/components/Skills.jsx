// frontend/src/components/Skills.jsx
import { useHome } from "../contexts/HomeContext.js";

export default function Skills() {
    const { home, loading, error } = useHome();

    if (loading) {
        return (
            <section className="section-skills">
                <div className="section-skills-wrapper">
                    <p className="section-skills-message">
                        Loading...
                    </p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="section-skills">
                <div className="section-skills-wrapper">
                    <p className="section-skills-message">
                        Failed to load data.
                    </p>
                </div>
            </section>
        );
    }

    if (!home?.skills) {
        return (
            <section className="section-skills">
                <div className="section-skills-wrapper">
                    <p className="section-skills-message">
                        Skills content is currently unavailable.
                    </p>
                </div>
            </section>
        );
    }

    const { eyebrow, title, items } = home.skills;

    return (
        <section className="section-skills" id="skills">
            <div className="section-skills-wrapper">
                <div className="section-skills-head">
                    <p className="section-skills-eyebrow">{eyebrow}</p>
                    <h2 className="section-skills-title">{title}</h2>
                </div>

                <div className="section-skills-layers">
                    {items.map((layer, index) => (
                        <div key={index} className="section-skills-layer">
                            <div className="section-skills-layer-head">
                                <span className="section-skills-layer-name">{layer.category}</span>
                            </div>
                            <div className="section-skills-bar">
                                {layer.list.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="section-skills-chip">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}