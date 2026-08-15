// frontend/src/components/Projects.jsx
import { useHome } from "../contexts/HomeContext.js";

export default function Projects() {
    const { home, loading, error } = useHome();

    if (loading) {
        return (
            <section className="section-projects">
                <div className="section-projects-wrapper">
                    <p className="section-projects-message">
                        Loading...
                    </p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="section-projects">
                <div className="section-projects-wrapper">
                    <p className="section-projects-message">
                        Failed to load data.
                    </p>
                </div>
            </section>
        );
    }

    if (!home.data.projects) {
        return (
            <section className="section-projects">
                <div className="section-projects-wrapper">
                    <p className="section-projects-message">
                        Projects content is currently unavailable.
                    </p>
                </div>
            </section>
        );
    }

    const { eyebrow, title, items } = home.data.projects;

    return (
        <section className="section-projects" id="projects">
            <div className="section-projects-wrapper">
                <div className="section-projects-head">
                    <p className="section-projects-eyebrow">{eyebrow}</p>
                    <h2 className="section-projects-title">{title}</h2>
                </div>

                <div className="section-projects-grid">
                    {items.map((project, index) => (
                        <div key={index} className="section-projects-card">
                            {project.coverImage?.url && (
                                <div className="section-projects-media">
                                    <img
                                        src={project.coverImage.url}
                                        alt={project.coverImage.alt || project.title}
                                        className="section-projects-image"
                                    />
                                </div>
                            )}

                            <div className="section-projects-top">
                                <h3 className="section-projects-name">{project.title}</h3>
                                <div className="section-projects-status">
                                    <span className={`section-projects-dot dot-${project.statusType}`}></span>
                                    {project.status}
                                </div>
                            </div>

                            <p className="section-projects-desc">{project.description}</p>

                            <div className="section-projects-tags">
                                {project.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="section-projects-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="section-projects-actions">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="section-projects-action section-projects-action-github"
                                    >
                                        Code
                                    </a>
                                )}

                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="section-projects-action section-projects-action-live"
                                    >
                                        Live
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}