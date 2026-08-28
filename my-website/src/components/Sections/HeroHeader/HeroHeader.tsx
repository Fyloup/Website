import { Download, Github, Linkedin, Mail, User } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import styles from "./HeroHeader.module.css";

const rise = {
	hidden: { opacity: 0, y: 24 },
	visible: { opacity: 1, y: 0 },
};

const EMAIL = "sirvente.philippe@gmail.com";

const links = [
	{
		href: "https://www.linkedin.com/in/philippe-smc/",
		label: "LinkedIn",
		icon: Linkedin,
	},
	{ href: "https://github.com/Fyloup", label: "GitHub", icon: Github },
	{ href: `mailto:${EMAIL}`, label: "Email", icon: Mail },
];

export function HeroHeader() {
	const { t } = useTranslation();

	return (
		<section id="top" className={styles.root}>
			<motion.div
				className={styles.grid}
				initial="hidden"
				animate="visible"
				variants={{
					hidden: {},
					visible: {
						transition: { staggerChildren: 0.12, delayChildren: 0.05 },
					},
				}}
			>
				<motion.div
					className={styles.text}
					variants={rise}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					<h1 className={styles.name}>Philippe Sirvente-Maroto</h1>
					<p className={styles.title}>{t("hero.title")}</p>
					<p className={styles.intro}>{t("hero.intro")}</p>
				</motion.div>

				<motion.div
					className={styles.avatarWrap}
					variants={rise}
					transition={{ type: "spring", stiffness: 110, damping: 18 }}
				>
					<div className={styles.avatar}>
						<User
							className={styles.avatarIcon}
							strokeWidth={1.25}
							aria-hidden="true"
						/>
					</div>
				</motion.div>

				<motion.div
					className={styles.actions}
					variants={rise}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					{links.map(({ href, label, icon: Icon }) => (
						<a
							key={label}
							href={href}
							target={href.startsWith("http") ? "_blank" : undefined}
							rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
							className={styles.iconLink}
							aria-label={label}
						>
							<Icon size={18} strokeWidth={1.75} />
						</a>
					))}
					<a href="/cv.pdf" download className={styles.cvButton}>
						<Download size={16} strokeWidth={1.75} />
						{t("hero.downloadCv")}
					</a>
				</motion.div>

				<motion.div
					className={styles.badge}
					variants={rise}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					<span className={styles.badgeDot} />
					<span className={styles.badgeLabel}>{t("hero.available")}</span>
				</motion.div>
			</motion.div>
		</section>
	);
}
