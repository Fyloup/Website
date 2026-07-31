import { motion } from "motion/react";
import ReactLogo from "../../../assets/skillcards/react/react.svg";
import { SkillCard } from "../../SkillCard/SkillCard";

import styles from "./Skills.module.css";

type Skill = {
	label: string;
	rarity: "gold" | "silver" | "basic";
	logoPath?: string;
	description: string;
};

const skills: Skill[] = [
	{ label: "React", rarity: "gold", logoPath: ReactLogo, description: 'Professional exp.'},
	{ label: "TypeScript", rarity: "gold", logoPath: ReactLogo, description: 'Professional exp.'},
	{ label: "NextJS", rarity: "silver", logoPath: ReactLogo, description: 'Professional exp.'},
	{ label: "JavaScript", rarity: "silver", logoPath: ReactLogo, description: 'Professional exp.'},
	{ label: "TanStack Query", rarity: "silver", logoPath: ReactLogo, description: 'Professional exp.'},
	{ label: "TanStack Router", rarity: "silver", logoPath: ReactLogo, description: 'Professional exp.'},
	{ label: "CSS Modules", rarity: "silver", logoPath: ReactLogo, description: 'Professional exp.'},
	{ label: "Motion", rarity: "silver", logoPath: ReactLogo, description: 'Professional exp.'},
	{ label: "Redux", rarity: "silver", logoPath: ReactLogo, description: 'Professional exp.'},
	{ label: "Tailwind", rarity: "basic", logoPath: ReactLogo, description: 'Professional exp.'},
	{ label: "Vite", rarity: "basic", logoPath: ReactLogo, description: 'Professional exp.'},
	{ label: "React Aria", rarity: "basic", logoPath: ReactLogo, description: 'Professional exp.'},
	{ label: "Node.js", rarity: "basic", logoPath: ReactLogo, description: 'Professional exp.'},
	{ label: "Vitest", rarity: "basic", logoPath: ReactLogo, description: 'Professional exp.'},
	{ label: "Cypress", rarity: "basic", logoPath: ReactLogo, description: 'Professional exp.'},
	{ label: "Playwright", rarity: "basic", logoPath: ReactLogo, description: 'Professional exp.'},
	{ label: "Storybook", rarity: "basic", logoPath: ReactLogo, description: 'Professional exp.'},
	{ label: "Figma", rarity: "basic", logoPath: ReactLogo, description: 'Professional exp.'},
	{ label: "Docker", rarity: "basic", logoPath: ReactLogo, description: 'Professional exp.'},
	{ label: "Python", rarity: "basic", logoPath: ReactLogo, description: 'Professional exp.'},
];

export function Skills() {
	return (
		<section id="skills" className={styles.section}>
			<div className={styles.header}>
				<span className={styles.kicker}>Stack &amp; Skills</span>
				<span className={styles.hint}>Hover to inspect</span>
			</div>

			<motion.div
				className={styles.root}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.15 }}
				variants={{
					hidden: {},
					visible: { transition: { staggerChildren: 0.06 } },
				}}
			>
				{skills.map((skill) => (
					<motion.div
						key={skill.label}
						variants={{
							hidden: { opacity: 0, y: 40, scale: 0.95 },
							visible: { opacity: 1, y: 0, scale: 1 },
						}}
						transition={{ type: "spring", stiffness: 120, damping: 16 }}
					>
						<SkillCard
							label={skill.label}
							rarity={skill.rarity}
							logo={skill.logoPath}
							description={skill.description}
						/>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
