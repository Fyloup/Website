import { motion } from "motion/react";

import { SkillCard } from "./SkillCard";
import styles from "./Skills.module.css";
import { skillCategories } from "./utils";

export function Skills() {
	return (
		<section id="skills" className={styles.section}>
			<div className={styles.header}>
				<span className={styles.kicker}>Stack &amp; Skills</span>
			</div>

			<div className={styles.categories}>
				{skillCategories.map((category) => (
					<div key={category.title} className={styles.category}>
						<span className={styles.categoryTitle}>{category.title}</span>

						<motion.div
							className={styles.grid}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.15 }}
							variants={{
								hidden: {},
								visible: { transition: { staggerChildren: 0.05 } },
							}}
						>
							{category.skills.map((skill) => (
								<motion.div
									key={skill.name}
									variants={{
										hidden: { opacity: 0, y: 16 },
										visible: { opacity: 1, y: 0 },
									}}
									transition={{ duration: 0.35, ease: "easeOut" }}
								>
									<SkillCard {...skill} />
								</motion.div>
							))}
						</motion.div>
					</div>
				))}
			</div>
		</section>
	);
}
