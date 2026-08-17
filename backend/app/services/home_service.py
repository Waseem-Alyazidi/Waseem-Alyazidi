# backend/app/services/home_service.py
import re
from app.errors.home_exceptions import InvalidVersionError

HOME_MOCK = {
    "version": "1.0.0",
    "data": {
        "hero": {
            "eyebrow": "Backend & Infrastructure Engineer",
            "headlineMain": "I build systems that don't fall over at",
            "headlineHighlight": "3 a.m.",
            "subHeadline": "Seven years designing distributed backends and the pipelines that keep them honest — from payment infrastructure clearing millions of transactions a day, to internal tooling that cut deploy time by 80%.",
            "primaryCta": {
                "label": "↓ Download CV",
                "url": "#",
                "download": True,
            },
            "secondaryCta": {
                "label": "Get in touch",
                "url": "#contact",
            },
            "statusText": "Available for new roles",
            "locationText": "Seattle, WA · remote-friendly",
            "profileImage": {
                "url": "/images/my-profile.jpg",
                "alt": "Profile picture of the Software Engineer",
            },
        },
        "about": {
            "eyebrow": "§01 — About",
            "title": "Who am I",
            "description": [
                "I'm a backend engineer who ended up specializing in the parts of the system nobody notices until they break — queues, retries, migrations, the 2am pager. I like problems with a correct answer: does the money settle, does the request land exactly once, does the system recover on its own.",
                "Most of my career has been spent inside fast-growing companies where the architecture had to change shape twice a year. I've learned to build things that are boring in production and easy to hand off, which is the only kind of clever that matters six months later.",
            ],
            "quote": "I care less about the framework of the week, and more about the thing still standing at 2am, under load, with everyone asleep.",
            "facts": [
                {"label": "Based in", "value": "Seattle, WA (remote-friendly)"},
                {"label": "Focus", "value": "Distributed systems, payments infra"},
                {"label": "Languages", "value": "Go, Rust, Python, TypeScript"},
                {"label": "Years shipping", "value": "7"},
                {"label": "Currently", "value": "Staff Engineer, Meridian Pay"},
            ],
        },
        "skills": {
            "eyebrow": "§03 — Toolset",
            "title": "Skills",
            "items": [
                {
                    "category": "Backend",
                    "list": ["Go", "Rust", "Python", "Node.js", "gRPC"],
                },
                {
                    "category": "Infrastructure",
                    "list": ["Kubernetes", "Terraform", "AWS", "Nomad", "Docker"],
                },
                {
                    "category": "Data",
                    "list": ["Postgres", "Kafka", "Redis", "ClickHouse"],
                },
                {
                    "category": "Tooling",
                    "list": ["Grafana", "Datadog", "GitHub Actions", "Linear"],
                },
            ],
        },
        "projects": {
            "eyebrow": "§04 — Selected work",
            "title": "Projects",
            "items": [
                {
                    "title": "Ledger",
                    "status": "operational",
                    "statusType": "live",
                    "description": "A distributed transaction ledger built for exactly-once settlement across regions, with automatic reconciliation.",
                    "coverImage": {
                        "url": "/images/projects/ledger-cover.jpg",
                        "alt": "Ledger project cover image",
                    },
                    "githubUrl": "https://github.com/rileyvoss/ledger",
                    "liveUrl": "https://ledger.rileyvoss.dev",
                    "tags": ["Go", "Kafka", "Postgres"],
                },
                {
                    "title": "Waypoint",
                    "status": "operational",
                    "statusType": "live",
                    "description": "An internal deploy orchestrator with progressive rollout, automatic rollback, and a status page nobody has to build twice.",
                    "coverImage": {
                        "url": "/images/projects/waypoint-cover.jpg",
                        "alt": "Waypoint project cover image",
                    },
                    "githubUrl": "https://github.com/rileyvoss/waypoint",
                    "liveUrl": "https://waypoint.rileyvoss.dev",
                    "tags": ["Rust", "Nomad", "gRPC"],
                },
                {
                    "title": "Signal",
                    "status": "in development",
                    "statusType": "dev",
                    "description": "Real-time anomaly detection for payment fraud, streaming transaction events through a scoring pipeline in under 80ms.",
                    "coverImage": {
                        "url": "/images/projects/signal-cover.jpg",
                        "alt": "Signal project cover image",
                    },
                    "githubUrl": "https://github.com/rileyvoss/signal",
                    "liveUrl": None,
                    "tags": ["Python", "Flink", "ClickHouse"],
                },
                {
                    "title": "Home Lab",
                    "status": "operational",
                    "statusType": "live",
                    "description": "A self-hosted Kubernetes cluster for testing failure modes before they happen at work. Open source, mildly overbuilt.",
                    "coverImage": {
                        "url": "/images/projects/homelab-cover.jpg",
                        "alt": "Home Lab project cover image",
                    },
                    "githubUrl": "https://github.com/rileyvoss/homelab",
                    "liveUrl": "https://homelab.rileyvoss.dev",
                    "tags": ["k8s", "Terraform", "Ansible"],
                },
            ],
        },
        "education": {
            "eyebrow": "§05 — Record",
            "title": "Education",
            "items": [
                {
                    "degree": "B.S. Computer Science",
                    "institution": "University of Washington",
                    "period": "2012 — 2016",
                },
                {
                    "degree": "Relevant coursework",
                    "institution": "Distributed systems, databases, computer networks",
                    "period": "Undergraduate",
                },
            ],
        },
        "certificates": {
            "eyebrow": "§06 — Verified",
            "title": "Certificates",
            "items": [
                {
                    "title": "AWS Certified Solutions Architect — Professional",
                    "issuer": "Amazon Web Services",
                    "issueDate": "Issued 2022",
                },
                {
                    "title": "Certified Kubernetes Administrator (CKA)",
                    "issuer": "Cloud Native Computing Foundation",
                    "issueDate": "Issued 2021",
                },
                {
                    "title": "Terraform Associate",
                    "issuer": "HashiCorp",
                    "issueDate": "Issued 2020",
                },
                {
                    "title": "Professional Cloud Architect",
                    "issuer": "Google Cloud",
                    "issueDate": "Issued 2023",
                },
            ],
        },
        "experience": {
            "eyebrow": "§02 — Changelog",
            "title": "Experience",
            "items": [
                {
                    "version": "v4.0",
                    "period": "2023 — present",
                    "role": "Staff Backend Engineer",
                    "company": "Meridian Pay",
                    "description": [
                        "Redesigned the settlement pipeline to clear transactions 40% faster under peak load",
                        "Led the migration off a decade-old monolith onto event-driven services, with zero downtime",
                        "Mentored four engineers through promotion to senior roles",
                    ],
                },
                {
                    "version": "v3.0",
                    "period": "2020 — 2023",
                    "role": "Senior Software Engineer",
                    "company": "Cascade Logistics",
                    "description": [
                        "Built the routing engine handling 2M+ shipments a month",
                        "Cut infrastructure spend 35% through right-sizing and spot capacity",
                        "Introduced an on-call rotation that reduced page volume by 60%",
                    ],
                },
                {
                    "version": "v2.0",
                    "period": "2018 — 2020",
                    "role": "Software Engineer",
                    "company": "Nimbus Health",
                    "description": [
                        "Shipped a HIPAA-compliant patient data API used by 30+ clinics",
                        "Built the CI/CD pipeline that took release cycles from weeks to days",
                    ],
                },
                {
                    "version": "v1.0",
                    "period": "2016 — 2018",
                    "role": "Junior Developer, founding team",
                    "company": "Loopwire",
                    "description": [
                        "First engineering hire; built the MVP backend solo",
                        "Learned, the hard way, why you write tests",
                    ],
                },
            ],
        },
        "contact": {
            "eyebrow": "§07 — Get in touch",
            "title": "Let's build something that holds.",
            "email": "hello@rileyvoss.dev",
            "primaryCta": {"label": "Schedule a call", "url": "#"},
            "socials": [
                {"label": "GitHub", "url": "#"},
                {"label": "LinkedIn", "url": "#"},
                {"label": "Twitter / X", "url": "#"},
                {"label": "Email", "url": "mailto:hello@rileyvoss.dev"},
            ],
        },
        "footer": {
            "brandName": "Riley Voss",
            "tagline": "Backend & infrastructure engineer building systems that hold up under load, and the pipelines that keep them honest.",
            "sections": [
                {
                    "title": "Section",
                    "links": [
                        {"label": "Who am I", "url": "#about"},
                        {"label": "Experience", "url": "#experience"},
                        {"label": "Projects", "url": "#projects"},
                    ],
                },
                {
                    "title": "More",
                    "links": [
                        {"label": "Certificates", "url": "#certificates"},
                        {"label": "Education", "url": "#education"},
                        {"label": "Contact", "url": "#contact"},
                    ],
                },
            ],
            "copyright": "© 2026 Riley Voss. Built with HTML & CSS, no framework required.",
        },
    },
}

VERSION_PATTERN = re.compile(r"^\d+\.\d+\.\d+$")

class HomeService:
    @staticmethod
    def get_home_data() -> dict:
        return HOME_MOCK

    @staticmethod
    def get_home_data_version():
        version = HOME_MOCK.get("version")

        if not isinstance(version, str):
            return InvalidVersionError("Version must be a string")

        if not VERSION_PATTERN.fullmatch(version):
            raise InvalidVersionError(f"Invalid version format: {version}")
        return version