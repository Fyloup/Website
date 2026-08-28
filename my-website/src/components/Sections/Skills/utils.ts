import AntDesignIcon from "#/assets/skillcards/ant-design.svg";
import ClaudeIcon from "#/assets/skillcards/claude.svg";
import CssIcon from "#/assets/skillcards/css.svg";
import CssModulesIcon from "#/assets/skillcards/css-modules.svg";
import CursorIcon from "#/assets/skillcards/cursor.svg";
import CypressIcon from "#/assets/skillcards/cypress.svg";
import DjangoIcon from "#/assets/skillcards/django.svg";
import DockerIcon from "#/assets/skillcards/docker.svg";
import ElectronIcon from "#/assets/skillcards/electron.svg";
import FigmaIcon from "#/assets/skillcards/figma.svg";
import FramerMotionIcon from "#/assets/skillcards/framer-motion.svg";
import GitlabIcon from "#/assets/skillcards/gitlab.svg";
import JavaIcon from "#/assets/skillcards/java.svg";
import JavaScriptIcon from "#/assets/skillcards/javascript.svg";
import JestIcon from "#/assets/skillcards/jest.svg";
import MaterialUiIcon from "#/assets/skillcards/material-ui.svg";
import NodeJsIcon from "#/assets/skillcards/node-js.svg";
import PlaywrightIcon from "#/assets/skillcards/playwright.svg";
import PythonIcon from "#/assets/skillcards/python.svg";
import RadixIcon from "#/assets/skillcards/radix.svg";
import ReactIcon from "#/assets/skillcards/react.svg";
import ReduxIcon from "#/assets/skillcards/redux.svg";
import TailwindIcon from "#/assets/skillcards/tailwind.svg";
import TanStackIcon from "#/assets/skillcards/tanstack.svg";
import TestingLibraryIcon from "#/assets/skillcards/testing-library.svg";
import TypeScriptIcon from "#/assets/skillcards/typescript.svg";
import ViteIcon from "#/assets/skillcards/vite.svg";
import VitestIcon from "#/assets/skillcards/vitest.svg";

export type Skill = {
	name: string;
	icon?: string;
};

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
			{ name: "Vite", icon: ViteIcon },
			{ name: "CSS", icon: CssIcon },
			{ name: "CSS Modules", icon: CssModulesIcon },
			{ name: "Tailwind", icon: TailwindIcon },
			{ name: "TanStack Router", icon: TanStackIcon },
			{ name: "TanStack Virtualizer", icon: TanStackIcon },
			{ name: "TanStack Query", icon: TanStackIcon },
			{ name: "Redux", icon: ReduxIcon },
			{ name: "Electron", icon: ElectronIcon },
			{ name: "Motion (Framer Motion)", icon: FramerMotionIcon },
		],
	},
	{
		title: "Frontend libraries",
		skills: [
			{ name: "React Aria" },
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
		title: "Infra",
		skills: [
			{ name: "Docker", icon: DockerIcon },
			{ name: "GitLab CI/CD", icon: GitlabIcon },
			{ name: "Husky" },
		],
	},
	{
		title: "Tools",
		skills: [{ name: "Figma", icon: FigmaIcon }],
	},
	{
		title: "AI Tools",
		skills: [
			{ name: "Claude Code", icon: ClaudeIcon },
			{ name: "Cursor", icon: CursorIcon },
			{ name: "Google Stitch" },
		],
	},
	{
		title: "Methodologies",
		skills: [{ name: "Agile/Scrum" }],
	},
	{
		title: "Languages",
		skills: [{ name: "English" }, { name: "Spanish" }],
	},
];
