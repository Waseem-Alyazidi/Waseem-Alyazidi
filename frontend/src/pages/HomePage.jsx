// frontend/src/pages/HomePage.jsx
import React from "react";

// Importing key Homepage components
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Experience from "../components/Experience.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Education from "../components/Education.jsx";
import Certificates from "../components/Certificates.jsx";
import Contact from "../components/Contact.jsx";


export default function HomePage() {
    return (
        <main className="homepage-main-wrapper" id="top-content">

            {/* Hero section */}
            <section id="hero" className="homepage-section section-hero">
                <Hero />
            </section>

            {/* Who am I section */}
            <section id="about" className="homepage-section section-about">
                <About />
            </section>

            {/* Experience section */}
            <section id="experience" className="homepage-section section-experience">
                <Experience />
            </section>

            {/* Skills section */}
            <section id="skills" className="homepage-section section-skills">
                <Skills />
            </section>

            {/* Projects section */}
            <section id="projects" className="homepage-section section-projects">
                <Projects />
            </section>

            {/* Education section */}
            <section id="education" className="homepage-section section-education">
                <Education />
            </section>

            {/* Certificates section */}
            <section id="certificates" className="homepage-section section-certificates">
                <Certificates />
            </section>

            {/* Contact section */}
            <section id="contact" className="homepage-section section-contact">
                <Contact />
            </section>
        </main>
    );
}