// frontend/src/components/Hero.jsx
import { useHome } from "../contexts/HomeContext.js";

export default function Hero() {
    const { home, loading, error } = useHome();

    // Loading state
    if (loading) {
        return (
            <section className="section-hero">
                <div className="section-hero-wrapper">
                    <p className="section-hero-message">
                        Loading...
                    </p>
                </div>
            </section>
        );
    }

    // Error state
    if (error) {
        return (
            <section className="section-hero">
                <div className="section-hero-wrapper">
                    <p className="section-hero-message">
                        Failed to load data.
                    </p>
                </div>
            </section>
        );
    }

    // No data found
    if (!home.data.hero) {
        return (
            <section className="section-hero">
                <div className="section-hero-wrapper">
                    <p className="section-hero-message">
                        Hero content is currently unavailable.
                    </p>
                </div>
            </section>
        )
    }

    const {
        eyebrow,
        headlineMain,
        headlineHighlight,
        subHeadline,
        primaryCta,
        secondaryCta,
        statusText,
        locationText,
        profileImage,
    } = home.data.hero;

    return (
        <section className="section-hero">
            <div className="section-hero-wrapper">
                <div className="section-hero-layout">

                    {/* Content */}
                    <div className="section-hero-content">
                        
                        <p className="section-hero-eyebrow">
                            {eyebrow}
                        </p>

                        <h1 className="section-hero-headline">
                            <span className="section-hero-headline-main">
                                {headlineMain}
                            </span>{" "}
                            <span className="section-hero-headline-highlight">
                                {headlineHighlight}
                            </span>
                        </h1>

                        <p className="section-hero-subheadline">
                            {subHeadline}
                        </p>

                        <div className="section-hero-actions">
                            <a
                                href={primaryCta.url}
                                download={primaryCta.download}
                                className="section-hero-primary-action"
                            >
                                {primaryCta.label}
                            </a>

                            <a
                                href={secondaryCta.url}
                                className="section-hero-secondary-action"
                            >
                                {secondaryCta.label}
                            </a>
                        </div>

                        <div className="section-hero-meta">
                            <span className="section-hero-status">
                                {statusText}
                            </span>

                            <span className="section-hero-meta-divider">
                                •
                            </span>

                            <span className="section-hero-location">
                                {locationText}
                            </span>
                        </div>
                    </div>

                    {/* Media */}
                    <div className="section-hero-media">
                        <div className="section-hero-avatar-wrapper">
                            <img
                                src={profileImage.url}
                                alt={profileImage.alt}
                                className="section-hero-avatar-image"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}