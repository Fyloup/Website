import { Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { getCvAsset } from "#/i18n";
import styles from "./Contact.module.css";

const EMAIL = "sirvente.philippe@gmail.com";

const links = [
	{
		href: "https://www.linkedin.com/in/philippe-smc/",
		labelKey: "contact.linkedin",
		icon: Linkedin,
	},
	{
		href: "https://github.com/Fyloup",
		labelKey: "contact.github",
		icon: Github,
	},
	{ href: `mailto:${EMAIL}`, labelKey: "contact.email", icon: Mail },
];

export function Contact() {
	const { t, i18n } = useTranslation();
	const cv = getCvAsset(i18n.language);

	return (
		<section id="contact" className={styles.root}>
			<motion.div
				className={styles.inner}
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<div className={styles.kicker}>{t("contact.kicker")}</div>
				<a href={`mailto:${EMAIL}`} className={styles.email}>
					{EMAIL} ↗
				</a>

				<div className={styles.actions}>
					{links.map(({ href, labelKey, icon: Icon }) => (
						<a
							key={labelKey}
							href={href}
							target={href.startsWith("http") ? "_blank" : undefined}
							rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
							className={styles.actionButton}
						>
							<Icon size={16} strokeWidth={1.75} />
							{t(labelKey)}
						</a>
					))}
					<a href={cv.href} download={cv.filename} className={styles.cvButton}>
						<Download size={16} strokeWidth={1.75} />
						{t("contact.downloadCv")}
					</a>
				</div>
			</motion.div>
		</section>
	);
}
