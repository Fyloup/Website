import { motion } from "motion/react";
import ReactLogo from "../../../assets/skillcards/react/react.svg";
import { SkillCard } from "../../SkillCard/SkillCard";

import styles from "./Skills.module.css";

type Skill = {
	label: string;
	rarity: 10 | 5 | 3;
	logo?: string;
};

// Rarity mirrors proficiency: 10 = expert, 5 = strong, 3 = proficient.
const skills: Skill[] = [
	{ label: "React", rarity: 10, logo: ReactLogo },
	{ label: "TypeScript", rarity: 10 },
	{ label: "NextJS", rarity: 5 },
	{ label: "JavaScript", rarity: 5 },
	{ label: "TanStack Query", rarity: 5 },
	{ label: "TanStack Router", rarity: 5 },
	{ label: "CSS Modules", rarity: 5 },
	{ label: "Motion", rarity: 5 },
	{ label: "Redux", rarity: 5 },
	{ label: "Tailwind", rarity: 3 },
	{ label: "Vite", rarity: 3 },
	{ label: "React Aria", rarity: 3 },
	{ label: "Node.js", rarity: 3 },
	{ label: "Vitest", rarity: 3 },
	{ label: "Cypress", rarity: 3 },
	{ label: "Playwright", rarity: 3 },
	{ label: "Storybook", rarity: 3 },
	{ label: "Figma", rarity: 3 },
	{ label: "Docker", rarity: 3 },
	{ label: "Python", rarity: 3 },
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
							logo={skill.logo}
						/>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
