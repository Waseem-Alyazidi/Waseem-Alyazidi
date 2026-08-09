// frontend/src/components/Footer.jsx
import { useHome } from "../contexts/HomeContext.js";

export default function Footer() {
    const { home, loading, error } = useHome();

    // Loading State
    if (loading) {
        return (
            <footer className="site-footer">
                <div className="site-footer-wrapper">
                    <p className="site-footer-message">Loading...</p>
                </div>
            </footer>
        );
    }

    // Error State
    if (error) {
        return (
            <footer className="site-footer">
                <div className="site-footer-wrapper">
                    <p className="site-footer-message">Failed to load footer data.</p>
                </div>
            </footer>
        );
    }

    const { brandName, tagline, sections, copyright } = home.footer;

    return (
        <footer className="site-footer">
            <div className="site-footer-wrapper">
                <div className="site-footer-top">
                    {/* Brand Info */}
                    <div className="site-footer-brand-container">
                        <div className="site-footer-brand">
                            <div className="site-footer-mark">RV</div>
                            <div className="site-footer-brand-name">{brandName}</div>
                        </div>
                        <p className="site-footer-tagline">{tagline}</p>
                    </div>

                    {/* Navigation Columns */}
                    {sections?.map((section, sIndex) => (
                        <div key={sIndex} className="site-footer-links">
                            <div className="site-footer-links-title">{section.title}</div>
                            {section.links.map((link, lIndex) => (
                                <a key={lIndex} href={link.url} className="site-footer-link">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="site-footer-bottom">
                    <span className="site-footer-copyright">{copyright}</span>
                    <a href="#top" className="site-footer-back-to-top">
                        Back to top ↑
                    </a>
                </div>
            </div>
        </footer>
    );
}