import { motion } from "motion/react";

import styles from "./About.module.css";

const columns = [
	{
		label: "Frontend",
		items: [
			"React",
			"TypeScript",
			"Next.js",
			"TanStack",
			"Motion",
			"CSS Modules",
		],
	},
	{
		label: "Backend & Tooling",
		items: ["Node.js", "Python", "Docker", "Vite", "Redux"],
	},
	{
		label: "Craft",
		items: [
			"Accessibility",
			"Performance",
			"Design systems",
			"Testing",
			"Figma",
		],
	},
];

export function About() {
	return (
		<section id="about" className={styles.root}>
			<div className={styles.kicker}>About</div>

			<motion.div
				className={styles.body}
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<p className={styles.statement}>
					I turn ambiguous product problems into interfaces people trust —
					auditing, modernizing and scaling frontend applications so they stay
					fast, accessible and reliable.
				</p>

				<div className={styles.columns}>
					{columns.map((column) => (
						<div key={column.label} className={styles.column}>
							<div className={styles.columnLabel}>{column.label}</div>
							<div className={styles.columnItems}>
								{column.items.map((item) => (
									<span key={item}>{item}</span>
								))}
							</div>
						</div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
