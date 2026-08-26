
import IrisLogo from '../../assets/projects/iris/irisLogo.png'
import MemoryLogo from '../../assets/projects/memory/memoryLogo.svg'
import SustainLogo from '../../assets/projects/sustain/sustainLogo.png'

export type SplashSection = {
    title: string;
    body: string;
    bullets?: string[];
}

export type ProjectEntry = {
    id: string;
    name: string;
    subtitle: string;
    role: string;
    period: string;
    description: string;
    highlights: string[];
    tags: string[];
    logoPath: string;
    viewButtonText: string;
    splashSections: SplashSection[];
}

export const projectsData: ProjectEntry[] = [
    {
        id: 'iris',
        name: "Iris",
        subtitle: "Internal AI platform",
        role: "Full-stack",
        period: "2022 — Present",
        description:
            "The web application hosting Egis' internal AI product, deployed to 18,000 employees with 5,000 daily active users. Designed and developed features end-to-end.",
        highlights: [
            "Chat, leaderboard and gamification systems shipped end-to-end",
            "Custom logo-based loading screens and animated badge notifications",
            "Badge-linked challenges driving engagement at company scale",
        ],
        tags: [
            "React",
            "TypeScript",
            "TanStack Query",
            "TanStack Router",
            "React Aria",
            "Redux",
        ],
        logoPath: IrisLogo,
        viewButtonText: "Meet Iris",
        splashSections: [
            {
                title: "Context",
                body: "Iris is Egis Group's internal AI assistant, built to support employees across their business use cases with an interface that adapts dynamically to the context of use.",
            },
            {
                title: "Role",
                body: "Frontend UI/UX developer within a team of 16. Responsible for designing and building the entire interface, with a particular focus on the chat module. Stack: React, SASS, Django, Docker, Python, JavaScript, CSS Modules.",
            },
            {
                title: "The chat",
                body: "Real-time streaming with an interface that adapts to the use case.",
                bullets: [
                    "Flows: trigger pre-configured prompts with \"@\" in the chat input",
                    "Multi-format handling: text, images, code and documents",
                ],
            },
            {
                title: "Gamification",
                body: "Built challenge systems with badges, a leaderboard, and a profile featuring progression and XP.",
            },
            {
                title: "Results",
                body: "5,000 daily active users, deployed to 18,000 employees across 70 countries. Winner of the FCI Awards, large enterprise category — \"Étincelle d'Or\".",
            },
        ],
    },
    {
        id: "memory",
		name: "Memory",
		subtitle: "Projects centralization tool",
		role: "Solo — design & build",
		period: "2024",
		description:
			"A personal product I designed and built end-to-end — from the concept and interface design down to the component implementation.",
		highlights: [
			"Concept, interface design and implementation, done solo",
			"A playground for frontend architecture and animation",
			"Strong, user-centric design system",
		],
		tags: ["React", "TypeScript", "Vite", "Motion", "CSS Modules"], 
        logoPath: MemoryLogo,
        viewButtonText: "Discover Memory",
        splashSections: [
            {
                title: "Context",
                body: "An internal tool centralizing the group's engineering projects.",
            },
            {
                title: "Role",
                body: "Full-stack developer in charge of a large frontend scope, with integration from frontend components down to the backend. Stack: React, TypeScript, Python, Django, CSS Modules.",
            },
            {
                title: "Challenge",
                body: "Handling large volumes of data with project versioning and tables spanning several thousand rows — without degrading performance or user experience.",
            },
            {
                title: "Results",
                body: "Deployed alongside Iris. Lets engineers find every piece of company data they need in one place — a major gain in time and organization.",
            },
        ],
	},
	{
        id: "sustain",
		name: "SustainEcho",
		subtitle: "Sustainability platform",
		role: "Full-stack",
		period: "2021 — 2022",
		description:
			"A platform for greener building construction. Shipped components and systems end-to-end with a strong focus on user-centric design.",
		highlights: [
			"Dashboard, stepper and data table built from scratch",
			"Filtering, search and sorting across large datasets",
			"Design system in Figma + a full visual identity redesign",
		],
		tags: ["React", "TypeScript", "Ant Design", "Figma", "Design System"],
        logoPath: SustainLogo,
        viewButtonText: "Discover SustainEcho",
        splashSections: [
            {
                title: "Context",
                body: "SustainEcho is a carbon optimization platform for the construction industry — a B2B startup helping construction companies find alternative, more eco-efficient materials while providing carbon assessments.",
            },
            {
                title: "Role",
                body: "Frontend UI/UX developer, in my final year at Epitech, within a team of about ten people. Led and fully redesigned the interface and built a complete design system. Developed components from scratch (tables, dashboards). Stack: React, JavaScript, CSS, Python, Django.",
            },
            {
                title: "Challenge",
                body: "First large-scale project without prior professional experience, joining a project already in progress. Rapid upskilling in a fast-paced startup environment.",
            },
            {
                title: "Results",
                body: "Acquired by the Egis group after one year — now commercialized under the name Emersus.",
            },
        ],
	}
]