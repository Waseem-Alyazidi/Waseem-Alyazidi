// frontend/src/components/Header.jsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

// Navigation links
const navLinks = [
    { id: "about", label: "Who am I", href: "#about" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "education", label: "Education", href: "#education" },
    { id: "certificates", label: "Certificates", href: "#certificates" },
    { id: "contact", label: "Contact", href: "#contact" },
];

export default function Header() {
    // State variables
    const [activeSection, setActiveSection] = useState("about");
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Download the CV
    const handleDownloadCV = () => {
        /*
            TODO:
            Fetch the CV from the backend once the API and database are available.
            This is currently a placeholder implementation for development/testing.
        */

        // Temporary demo behavior
        alert("The CV downloaded successfully");
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Calculate scroll progress percentage
            const totalHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            if (totalHeight > 0) {
                setScrollProgress(
                    (scrollPosition / totalHeight) * 100
                );
            }

            // Determine the currently active section
            const sectionOffset = 150;

            for (const link of navLinks) {
                const section = document.querySelector(link.href);

                if (!section) continue;

                const sectionTop = section.offsetTop - sectionOffset;
                const sectionBottom =
                    sectionTop + section.offsetHeight;

                if (
                    scrollPosition >= sectionTop &&
                    scrollPosition < sectionBottom
                ) {
                    setActiveSection(link.id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Run once on mount
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="site-header">
            <div
                className="scroll-progress-bar"
                style={{ width: `${scrollProgress}%` }}
            />

            <div className="header-container">
                <div className="header-brand">
                    {/* <img src="" alt="Brand logo" className="brand-logo" /> */}

                    <div className="brand-info">
                        <span className="brand-name">NAME</span>
                        <span className="brand-role">ROLE</span>
                    </div>
                </div>

                <nav className={`primary-nav ${isMobileMenuOpen ? "open" : ""}`}>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={link.href}
                                    className={`nav-item ${activeSection === link.id ? "active" : ""}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-actions">
                    <button
                        className="download-cv-btn"
                        onClick={handleDownloadCV}
                    >
                        Download CV
                    </button>

                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen((prevState) => !prevState)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? (<X size={24} />) : (<Menu size={24} />)}
                    </button>
                </div>
            </div>
        </header>
    );
}