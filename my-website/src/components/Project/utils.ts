import IrisLogo from "../../assets/projects/iris/irisLogo.png";
import MemoryLogo from "../../assets/projects/memory/memoryLogo.svg";
import SustainLogo from "../../assets/projects/sustain/sustainLogo.png";
import AntDesignIcon from "#/assets/skillcards/ant-design.svg";
import CssModulesIcon from "#/assets/skillcards/css-modules.svg";
import FigmaIcon from "#/assets/skillcards/figma.svg";
import FramerMotionIcon from "#/assets/skillcards/framer-motion.svg";
import ReactAriaIcon from "#/assets/skillcards/react-aria.svg";
import ReactIcon from "#/assets/skillcards/react.svg";
import ReduxIcon from "#/assets/skillcards/redux.svg";
import TanStackIcon from "#/assets/skillcards/tanstack.svg";
import TypeScriptIcon from "#/assets/skillcards/typescript.svg";
import ViteIcon from "#/assets/skillcards/vite.svg";

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

/**
 * Maps a project `tag` to the icon shown in place of its label. Tags with no
 * entry here fall back to rendering their text.
 */
export const tagIcons: Record<string, string> = {
	React: ReactIcon,
	TypeScript: TypeScriptIcon,
	"TanStack Query": TanStackIcon,
	"TanStack Router": TanStackIcon,
	"React Aria": ReactAriaIcon,
	Redux: ReduxIcon,
	Vite: ViteIcon,
	Motion: FramerMotionIcon,
	"CSS Modules": CssModulesIcon,
	"Ant Design": AntDesignIcon,
	Figma: FigmaIcon,
};

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
