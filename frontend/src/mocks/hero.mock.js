// frontend/src/mocks/hero.mock.js

export const heroMock = {
    version: 1,

    data: {
        eyebrow: "Backend & Infrastructure Engineer",
        headlineMain: "I build systems that don't fall over at",
        headlineHighlight: "3 a.m.",
        subHeadline: "Seven years designing distributed backends and the pipelines that keep them honest — from payment infrastructure clearing millions of transactions a day, to internal tooling that cut deploy time by 80%.",

        primaryCta: {
            label: "↓ Download CV",
            url: "/resume.pdf",
            download: true,
        },

        secondaryCta: {
            label: "Get in touch",
            url: "#contact",
        },

        statusText: "Available for new roles",
        locationText: "Seattle, WA · remote-friendly",

        profileImage: {
            url: "/images/my-profile.jpg",
            alt: "Profile picture of the Software Engineer",
        },
    },
};