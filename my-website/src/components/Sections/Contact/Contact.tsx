import { motion } from "motion/react";

import styles from "./Contact.module.css";

const EMAIL = "sirvente.philippe@gmail.com";

const socials = [
	{ href: "https://github.com/Fyloup", label: "GitHub ↗" },
	{ href: "https://www.linkedin.com/in/philippe-smc/", label: "LinkedIn ↗" },
];

export function Contact() {
	return (
		<section id="contact" className={styles.root}>
			<span className={styles.blob} aria-hidden="true" />
			<motion.div
				className={styles.inner}
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<div className={styles.kicker}>Contact</div>
				<h2 className={styles.title}>Have something worth building?</h2>
				<a href={`mailto:${EMAIL}`} className={styles.email}>
					{EMAIL} ↗
				</a>
				<div className={styles.socials}>
					{socials.map((social) => (
						<a
							key={social.href}
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.social}
						>
							{social.label}
						</a>
					))}
				</div>
			</motion.div>
		</section>
	);
}
