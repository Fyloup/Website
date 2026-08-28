import { Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import avatar from "#/assets/avatar.jpg";
import { getCvAsset } from "#/i18n";
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
	const { t, i18n } = useTranslation();
	const cv = getCvAsset(i18n.language);

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
					<h1 className={styles.name}>Philippe <br/> Sirvente-Maroto</h1>
					<p className={styles.title}>{t("hero.title")}</p>
					<p className={styles.intro}>{t("hero.intro")}</p>
				</motion.div>

				<motion.div
					className={styles.avatarWrap}
					variants={rise}
					transition={{ type: "spring", stiffness: 110, damping: 18 }}
				>
					<div className={styles.avatar}>
						<img
							className={styles.avatarImg}
							src={avatar}
							alt="Philippe Sirvente-Maroto"
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
					<a href={cv.href} download={cv.filename} className={styles.cvButton}>
						<Download size={16} strokeWidth={1.75} />
						{t("hero.downloadCv")}
					</a>
				</motion.div>
			</motion.div>
		</section>
	);
}
