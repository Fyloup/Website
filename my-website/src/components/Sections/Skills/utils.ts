export type Mastery = "mastered" | "basic" | "neutral";

export type Skill = {
	name: string;
	mastery: Mastery;
	description?: string;
};

export type SkillCategory = {
	title: string;
	skills: Skill[];
};

export const masteryDescriptions: Record<Mastery, string> = {
	mastered: "Deep, hands-on experience — comfortable owning complex work end-to-end.",
	basic: "Working knowledge — able to contribute and ship with some guidance.",
	neutral: "Used regularly as part of the day-to-day workflow.",
};

function mastered(names: string[]): Skill[] {
	return names.map((name) => ({ name, mastery: "mastered" }));
}

function neutral(names: string[]): Skill[] {
	return names.map((name) => ({ name, mastery: "neutral" }));
}

export const skillCategories: SkillCategory[] = [
	{
		title: "Frontend",
		skills: mastered([
			"React",
			"TypeScript",
			"JavaScript",
			"Vite",
			"CSS",
			"CSS Modules",
			"Tailwind",
			"TanStack Router",
			"TanStack Virtualizer",
			"TanStack Query",
			"Redux",
			"Electron",
			"Motion (Framer Motion)",
		]),
	},
	{
		title: "Frontend libraries",
		skills: mastered(["React Aria", "Material UI", "Ant Design", "Radix"]),
	},
	{
		title: "Backend",
		skills: [
			{ name: "Python", mastery: "mastered" },
			{ name: "Java", mastery: "mastered" },
			{ name: "Django", mastery: "basic" },
			{ name: "Node.js", mastery: "basic" },
		],
	},
	{
		title: "Testing",
		skills: [
			{ name: "Vitest", mastery: "mastered" },
			{ name: "Cypress", mastery: "mastered" },
			{ name: "React Testing Library", mastery: "mastered" },
			{ name: "Jest", mastery: "mastered" },
			{ name: "Playwright", mastery: "basic" },
		],
	},
	{
		title: "Infra",
		skills: mastered(["Docker", "GitLab CI/CD", "Husky"]),
	},
	{
		title: "Tools",
		skills: neutral(["Figma"]),
	},
	{
		title: "AI Tools",
		skills: neutral(["Claude Code", "Cursor", "Google Stitch"]),
	},
	{
		title: "Methodologies",
		skills: neutral(["Agile/Scrum"]),
	},
	{
		title: "Languages",
		skills: [
			{
				name: "English",
				mastery: "neutral",
				description: "C1 level — professional working proficiency.",
			},
			{
				name: "Spanish",
				mastery: "neutral",
				description: "C1 level — professional working proficiency.",
			},
		],
	},
];
