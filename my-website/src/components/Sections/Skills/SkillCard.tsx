import styles from "./SkillCard.module.css";
import type { Skill } from "./utils";

function getInitials(name: string): string {
	const words = name.split(" ").filter(Boolean);
	if (words.length > 1) {
		return (words[0][0] + words[1][0]).toUpperCase();
	}
	return name.slice(0, 2).toUpperCase();
}

export function SkillCard({ name, icon }: Skill) {
	return (
		<div className={styles.card}>
			<span className={styles.logo}>
				{icon ? (
					<img className={styles.icon} src={icon} alt="" />
				) : (
					<span className={styles.monogram}>{getInitials(name)}</span>
				)}
			</span>
			<span className={styles.name}>{name}</span>
		</div>
	);
}
