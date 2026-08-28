import styles from "./SkillCard.module.css";
import { SKILL_DESCRIPTION_PLACEHOLDER, type Skill } from "./utils";

function getInitials(name: string): string {
	const words = name.split(" ").filter(Boolean);
	if (words.length > 1) {
		return (words[0][0] + words[1][0]).toUpperCase();
	}
	return name.slice(0, 2).toUpperCase();
}

export function SkillCard({ name, icon, emoji, description }: Skill) {
	return (
		<div className={styles.card}>
			<span className={styles.logo}>
				{icon ? (
					<img className={styles.icon} src={icon} alt="" />
				) : emoji ? (
					<span className={styles.emoji} aria-hidden="true">
						{emoji}
					</span>
				) : (
					<span className={styles.monogram}>{getInitials(name)}</span>
				)}
			</span>
			<span className={styles.body}>
				<span className={styles.name}>{name}</span>
				<span className={styles.description}>
					{description ?? SKILL_DESCRIPTION_PLACEHOLDER}
				</span>
			</span>
		</div>
	);
}
