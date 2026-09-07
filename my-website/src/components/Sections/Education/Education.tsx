import { useTranslation } from "react-i18next";

import EpitechLogo from "../../../assets/education/epitechLogo.svg";
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
						<img
							src={EpitechLogo}
							alt={t("education.school")}
							className={styles.logo}
						/>
					</div>
				</div>
				<div className={styles.textCol}>
					<div className={styles.schoolRow}>
						<h3 className={styles.school}>{t("education.school")}</h3>
						<span className={styles.period}>{t("education.period")}</span>
					</div>
					<span className={styles.diploma}>{t("education.diploma")}</span>
					<p className={styles.description}>{t("education.description")}</p>
				</div>
			</div>
		</section>
	);
}
