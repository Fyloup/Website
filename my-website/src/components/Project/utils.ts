import IrisLogo from "../../assets/projects/iris/irisLogo.png";
import MemoryLogo from "../../assets/projects/memory/memoryLogo.svg";
import SustainLogo from "../../assets/projects/sustain/sustainLogo.png";

export type SplashSection = {
	title: string;
	body: string;
	bullets?: string[];
};

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
};

/**
 * Structural, non-translatable data for each project. The user-facing copy
 * (name, subtitle, description, highlights, splash sections, …) lives in the
 * i18n locale files under `projects.items.<id>` and is merged in at render time
 * by the Projects section.
 */
export type ProjectStruct = Pick<ProjectEntry, "id" | "tags" | "logoPath">;

export const projectsStruct: ProjectStruct[] = [
	{
		id: "iris",
		tags: [
			"React",
			"TypeScript",
			"TanStack Query",
			"TanStack Router",
			"React Aria",
			"Redux",
		],
		logoPath: IrisLogo,
	},
	{
		id: "memory",
		tags: ["React", "TypeScript", "Vite", "Motion", "CSS Modules"],
		logoPath: MemoryLogo,
	},
	{
		id: "sustain",
		tags: ["React", "TypeScript", "Ant Design", "Figma", "Design System"],
		logoPath: SustainLogo,
	},
];
