import IrisLogo from "#/assets/projects/iris/irisLogo.png";
import MemoryLogo from "#/assets/projects/memory/memoryLogo.svg";
import SustainLogo from "#/assets/projects/sustain/sustainLogo.png";
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
import SassIcon from '#/assets/skillcards/sass.svg';
import JavaScripIcon from '#/assets/skillcards/javascript.svg';
import DjangoIcon from '#/assets/skillcards/django.svg';
import RTLIcon from '#/assets/skillcards/testing-library.svg';
import DockerIcon from '#/assets/skillcards/docker.svg';
import GitHubIcon from '#/assets/skillcards/github.svg';
import VitestIcon from "#/assets/skillcards/vitest.svg";
import GitLabIcon from "#/assets/skillcards/gitlab.svg";
import CssIcon from "#/assets/skillcards/css.svg";
import PlaywrightIcon from "#/assets/skillcards/playwright.svg";
import CursorIcon from "#/assets/skillcards/cursor.svg";
import ClaudeIcon from "#/assets/skillcards/claude.svg";
import JestIcon from "#/assets/skillcards/jest.svg";
import CypressIcon from "#/assets/skillcards/cypress.svg";
import RollupIcon from "#/assets/skillcards/rollup.svg";
import HuskyIcon from "#/assets/skillcards/husky.svg";

export type SplashSection = {
	title: string;
	body: string;
	bullets?: string[];
};

export type ProjectEntry = {
	id: string;
	name: string;
	role: string;
	company: string;
	period: string;
	description: string;
	highlights: string[];
	tags: string[];
	logoPath: string;
	/** Accent colour for the project's "dive" button. */
	accent: string;
	viewButtonText: string;
	splashSections: SplashSection[];
};

/**
 * Structural, non-translatable data for each project. The user-facing copy
 * (name, role, company, description, highlights, splash sections, …) lives in the
 * i18n locale files under `projects.items.<id>` and is merged in at render time
 * by the Projects section.
 */
export type ProjectStruct = Pick<
	ProjectEntry,
	"id" | "tags" | "logoPath" | "accent"
>;

/**
 * Maps a project `tag` to the icon shown in place of its label. Tags with no
 * entry here fall back to rendering their text.
 */
export const tagIcons: Record<string, string> = {
	React: ReactIcon,
	TypeScript: TypeScriptIcon,
	"TanStack Query": TanStackIcon,
	"TanStack Router": TanStackIcon,
	"TanStack Virtualizer": TanStackIcon,
	"React Aria": ReactAriaIcon,
	Redux: ReduxIcon,
	Vite: ViteIcon,
	Vitest: VitestIcon,
	Motion: FramerMotionIcon,
	CSS: CssIcon,
	"CSS Modules": CssModulesIcon,
	"Ant Design": AntDesignIcon,
	Figma: FigmaIcon,
	Sass: SassIcon,
	JavaScript: JavaScripIcon,
	Django: DjangoIcon,
	"React Testing Library": RTLIcon,
	Jest: JestIcon,
	Cypress: CypressIcon,
	Playwright: PlaywrightIcon,
	Rollup: RollupIcon,
	Docker: DockerIcon,
	GitHub: GitHubIcon,
	GitLab: GitLabIcon,
	Cursor: CursorIcon,
	Claude: ClaudeIcon,
	Husky: HuskyIcon
};

export const projectsStruct: ProjectStruct[] = [
	{
		id: "iris",
		tags: [
			"React",
			"TypeScript",
			"React Aria",
			"Sass",
			"CSS Modules",
			"TanStack Query",
			"TanStack Router",
			"TanStack Virtualizer",
			"Redux",
			"Vitest",
			"Vite",
			"Docker",
			"GitLab"
		],
		logoPath: IrisLogo,
		accent: "#516ED6",
	},
	{
		id: "memory",
		tags: ["React", "TypeScript", "React Aria", "CSS", "CSS Modules", "TanStack Query", "TanStack Router", "Django", "Vitest", "Playwright", "Vite", "Docker", "Husky", "GitLab", "Cursor", "Claude"],
		logoPath: MemoryLogo,
		accent: "#85a42d",
	},
	{
		id: "sustain",
		tags: ["React", "JavaScript", "Ant Design", "Sass", "Redux", "Django", "React Testing Library", "Jest", "Cypress", "Vite", "Rollup", "Docker", "GitHub"],
		logoPath: SustainLogo,
		accent: "#12826C",
	},
];
