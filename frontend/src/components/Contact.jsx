// frontend/src/components/Contact.jsx
import { useHome } from "../contexts/HomeContext.js";

export default function Contact() {
    const { home, loading, error } = useHome();

    if (loading) {
        return (
            <section className="section-contact">
                <div className="section-contact-wrapper">
                    <p className="section-contact-message">
                        Loading...
                    </p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="section-contact">
                <div className="section-contact-wrapper">
                    <p className="section-contact-message">
                        Failed to load data.
                    </p>
                </div>
            </section>
        );
    }

    if (!home.data.contact) {
        return (
            <section className="section-contact">
                <div className="section-contact-wrapper">
                    <p className="section-contact-message">
                        Contact content is currently unavailable.
                    </p>
                </div>
            </section>
        );
    }

    const { eyebrow, title, email, primaryCta, socials } = home.data.contact;

    return (
        <section className="section-contact" id="contact">
            <div className="section-contact-wrapper">
                <p className="section-contact-eyebrow">{eyebrow}</p>
                <h2 className="section-contact-headline">{title}</h2>

                <div className="section-contact-row">
                    <a className="section-contact-email" href={`mailto:${email}`}>
                        {email}
                    </a>
                    {primaryCta && (
                        <a className="section-contact-cta" href={primaryCta.url}>
                            {primaryCta.label}
                        </a>
                    )}
                </div>

                <div className="section-contact-socials">
                    {socials.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            className="section-contact-social-link"
                            aria-label={social.label}
                        >
                            {social.label}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}