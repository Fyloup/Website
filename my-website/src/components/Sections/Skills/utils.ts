import AgileScrumIcon from "#/assets/skillcards/scrum.svg";
import AntDesignIcon from "#/assets/skillcards/ant-design.svg";
import BunIcon from "#/assets/skillcards/bun.svg";
import ClaudeIcon from "#/assets/skillcards/claude.svg";
import CssIcon from "#/assets/skillcards/css.svg";
import CssModulesIcon from "#/assets/skillcards/css-modules.svg";
import CursorIcon from "#/assets/skillcards/cursor.svg";
import CypressIcon from "#/assets/skillcards/cypress.svg";
import DjangoIcon from "#/assets/skillcards/django.svg";
import DockerIcon from "#/assets/skillcards/docker.svg";
import ElectronIcon from "#/assets/skillcards/electron.svg";
import EnglishIcon from "#/assets/skillcards/english.svg";
import FigmaIcon from "#/assets/skillcards/figma.svg";
import FramerMotionIcon from "#/assets/skillcards/framer-motion.svg";
import GitIcon from "#/assets/skillcards/git.svg";
import GitHubIcon from "#/assets/skillcards/github.svg";
import GitlabIcon from "#/assets/skillcards/gitlab.svg";
import GoogleStitchIcon from "#/assets/skillcards/google-stitch.svg";
import InkscapeIcon from "#/assets/skillcards/inkscape.svg";
import JavaIcon from "#/assets/skillcards/java.svg";
import JavaScriptIcon from "#/assets/skillcards/javascript.svg";
import JestIcon from "#/assets/skillcards/jest.svg";
import JiraIcon from "#/assets/skillcards/jira.svg";
import MaterialUiIcon from "#/assets/skillcards/material-ui.svg";
import MongoDbIcon from "#/assets/skillcards/mongodb.svg";
import NodeJsIcon from "#/assets/skillcards/node-js.svg";
import PlaywrightIcon from "#/assets/skillcards/playwright.svg";
import PostmanIcon from "#/assets/skillcards/postman.svg";
import PythonIcon from "#/assets/skillcards/python.svg";
import RadixIcon from "#/assets/skillcards/radix.svg";
import ReactAriaIcon from "#/assets/skillcards/react-aria.svg";
import ReactIcon from "#/assets/skillcards/react.svg";
import ReduxIcon from "#/assets/skillcards/redux.svg";
import RollupIcon from "#/assets/skillcards/rollup.svg";
import SassIcon from "#/assets/skillcards/sass.svg";
import SpanishIcon from "#/assets/skillcards/spanish.svg";
import TailwindIcon from "#/assets/skillcards/tailwind.svg";
import TanStackIcon from "#/assets/skillcards/tanstack.svg";
import TestingLibraryIcon from "#/assets/skillcards/testing-library.svg";
import TypeScriptIcon from "#/assets/skillcards/typescript.svg";
import ViteIcon from "#/assets/skillcards/vite.svg";
import VisualStudioIcon from "#/assets/skillcards/visual-studio.svg";
import VitestIcon from "#/assets/skillcards/vitest.svg";
import VsCodeIcon from "#/assets/skillcards/vscode.svg";
import XmlIcon from "#/assets/skillcards/xml.svg";

export type Skill = {
	name: string;
	icon?: string;
	/** Fallback glyph shown when there's no `icon` (takes priority over initials). */
	emoji?: string;
	description?: string;
};

/** Shown until each skill gets a real blurb; clamped to 3 lines in the card. */
export const SKILL_DESCRIPTION_PLACEHOLDER =
	"Short description coming soon — a couple of sentences on how this skill is used day to day and what it's paired with.";

export type SkillCategory = {
	title: string;
	skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
	{
		title: "Frontend",
		skills: [
			{ name: "React", icon: ReactIcon },
			{ name: "TypeScript", icon: TypeScriptIcon },
			{ name: "JavaScript", icon: JavaScriptIcon },
			{ name: "CSS", icon: CssIcon },
			{ name: "Sass", icon: SassIcon },
			{ name: "CSS Modules", icon: CssModulesIcon },
			{ name: "Tailwind", icon: TailwindIcon },
			{ name: "TanStack Router", icon: TanStackIcon },
			{ name: "TanStack Virtualizer", icon: TanStackIcon },
			{ name: "TanStack Query", icon: TanStackIcon },
			{ name: "Redux", icon: ReduxIcon },
			{ name: "Electron", icon: ElectronIcon },
			{ name: "Motion (Framer Motion)", icon: FramerMotionIcon },
			{ name: "XML", icon: XmlIcon },
		],
	},
	{
		title: "Frontend libraries",
		skills: [
			{ name: "React Aria", icon: ReactAriaIcon },
			{ name: "Material UI", icon: MaterialUiIcon },
			{ name: "Ant Design", icon: AntDesignIcon },
			{ name: "Radix", icon: RadixIcon },
		],
	},
	{
		title: "Backend",
		skills: [
			{ name: "Python", icon: PythonIcon },
			{ name: "Java", icon: JavaIcon },
			{ name: "Django", icon: DjangoIcon },
			{ name: "Node.js", icon: NodeJsIcon },
			{ name: "MongoDB", icon: MongoDbIcon },
		],
	},
	{
		title: "Testing",
		skills: [
			{ name: "Vitest", icon: VitestIcon },
			{ name: "Cypress", icon: CypressIcon },
			{ name: "React Testing Library", icon: TestingLibraryIcon },
			{ name: "Jest", icon: JestIcon },
			{ name: "Playwright", icon: PlaywrightIcon },
		],
	},
	{
		title: "Build tools",
		skills: [
			{ name: "Vite", icon: ViteIcon },
			{ name: "Rollup", icon: RollupIcon },
			{ name: "Bun", icon: BunIcon },
		],
	},
	{
		title: "Version control",
		skills: [
			{ name: "Git", icon: GitIcon },
			{ name: "GitHub", icon: GitHubIcon },
			{ name: "GitLab", icon: GitlabIcon },
		],
	},
	{
		title: "Infra",
		skills: [
			{ name: "Docker", icon: DockerIcon },
			{ name: "GitLab CI/CD", icon: GitlabIcon },
			{ name: "Husky", emoji: "🐶" },
		],
	},
	{
		title: "Tools",
		skills: [
			{ name: "Figma", icon: FigmaIcon },
			{ name: "Inkscape", icon: InkscapeIcon },
			{ name: "VS Code", icon: VsCodeIcon },
			{ name: "Visual Studio", icon: VisualStudioIcon },
			{ name: "Postman", icon: PostmanIcon },
		],
	},
	{
		title: "AI Tools",
		skills: [
			{ name: "Claude Code", icon: ClaudeIcon },
			{ name: "Cursor", icon: CursorIcon },
			{ name: "Google Stitch", icon: GoogleStitchIcon },
		],
	},
	{
		title: "Methodologies",
		skills: [
			{ name: "Agile/Scrum", icon: AgileScrumIcon },
			{ name: "Jira", icon: JiraIcon },
		],
	},
	{
		title: "Languages",
		skills: [
			{ name: "English", icon: EnglishIcon },
			{ name: "Spanish", icon: SpanishIcon },
		],
	},
];
