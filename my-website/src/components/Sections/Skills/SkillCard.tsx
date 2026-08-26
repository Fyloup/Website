import clsx from "clsx";

import styles from "./SkillCard.module.css";
import { masteryDescriptions, type Skill } from "./utils";

function getInitials(name: string): string {
	const words = name.split(" ").filter(Boolean);
	if (words.length > 1) {
		return (words[0][0] + words[1][0]).toUpperCase();
	}
	return name.slice(0, 2).toUpperCase();
}

export function SkillCard({ name, mastery, description }: Skill) {
	return (
		<div className={clsx(styles.card, styles[mastery])}>
			<div className={styles.logoCol}>
				<span className={styles.monogram}>{getInitials(name)}</span>
			</div>
			<div className={styles.textCol}>
				<span className={styles.name}>{name}</span>
				<span className={styles.description}>
					{description ?? masteryDescriptions[mastery]}
				</span>
			</div>
		</div>
	);
}
