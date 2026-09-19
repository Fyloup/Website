import { Download } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import GithubIcon from "#/assets/skillcards/github.svg";
import LinkedinIcon from "#/assets/skillcards/linkedin.svg";
import { Button } from "#/components/Button/Button";
import { getCvAsset } from "#/i18n";
import styles from "./Contact.module.css";

const EMAIL = "sirvente.philippe@gmail.com";

const links = [
	{
		href: "https://www.linkedin.com/in/philippe-smc/",
		labelKey: "contact.linkedin",
		icon: <img src={LinkedinIcon} alt="" width={16} height={16} />,
	},
	{
		href: "https://github.com/Fyloup",
		labelKey: "contact.github",
		icon: <img src={GithubIcon} alt="" width={16} height={16} />,
	},
	{
		href: `mailto:${EMAIL}`,
		labelKey: "contact.email",
		icon: (
			<span className="material-symbols-rounded" aria-hidden="true" style={{ fontSize: 16 }}>
				alternate_email
			</span>
		),
	},
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
					{links.map(({ href, labelKey, icon }) => (
						<Button
							key={labelKey}
							as="a"
							variant="secondary"
							href={href}
							target={href.startsWith("http") ? "_blank" : undefined}
							rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
						>
							{icon}
							{t(labelKey)}
						</Button>
					))}
					<Button as="a" variant="primary" href={cv.href} download={cv.filename}>
						<Download size={16} strokeWidth={1.75} />
						{t("contact.downloadCv")}
					</Button>
				</div>
			</motion.div>
		</section>
	);
}
