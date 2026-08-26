import { GraduationCap } from "lucide-react";

import styles from "./Education.module.css";

export function Education() {
	return (
		<section id="education" className={styles.section}>
			<div className={styles.header}>
				<span className={styles.kicker}>Education</span>
			</div>

			<div className={styles.card}>
				<div className={styles.logoCol}>
					<div className={styles.logoPlaceholder}>
						<GraduationCap
							className={styles.logoIcon}
							strokeWidth={1.25}
							aria-hidden="true"
						/>
					</div>
				</div>
				<div className={styles.textCol}>
					<span className={styles.period}>2017 — 2022 · 5 years</span>
					<h3 className={styles.school}>Epitech</h3>
					<span className={styles.diploma}>
						Master's Degree in Computer Science
					</span>
					<p className={styles.description}>
						Including a fourth year abroad at UQAC (Université du Québec à
						Chicoutimi), Quebec — coursework in Java, AI and English.
					</p>
				</div>
			</div>
		</section>
	);
}
