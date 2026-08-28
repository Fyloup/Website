import { GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";

import styles from "./Education.module.css";

export function Education() {
	const { t } = useTranslation();

	return (
		<section id="education" className={styles.section}>
			<div className={styles.header}>
				<span className={styles.kicker}>{t("education.kicker")}</span>
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
					<span className={styles.period}>{t("education.period")}</span>
					<h3 className={styles.school}>{t("education.school")}</h3>
					<span className={styles.diploma}>{t("education.diploma")}</span>
					<p className={styles.description}>{t("education.description")}</p>
				</div>
			</div>
		</section>
	);
}
