import { motion } from "motion/react";

import styles from "./HeroHeader.module.css";

// Toggle to hide the "open to new opportunities" badge.
const available = true;

const rise = {
	hidden: { opacity: 0, y: 24 },
	visible: { opacity: 1, y: 0 },
};

export function HeroHeader() {
	return (
		<section id="top" className={styles.root}>
			<div className={styles.blobs} aria-hidden="true">
				<span className={styles.blobCircle} />
				<span className={styles.blobPill} />
				<span className={styles.blobRing} />
				<span className={styles.blobSquare} />
			</div>

			<motion.div
				className={styles.content}
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
					className={styles.eyebrow}
					variants={rise}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					Frontend Developer · React &amp; TypeScript
				</motion.div>

				<motion.h1
					className={styles.title}
					variants={rise}
					transition={{ type: "spring", stiffness: 110, damping: 18 }}
				>
					Building fast, considered web products — front to back.
				</motion.h1>

				<motion.p
					className={styles.intro}
					variants={rise}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					I'm Philippe — a web developer with 5 years of experience specializing
					in frontend architecture, technology stack selection and scalable
					design systems. I audit, modernize and scale frontend applications,
					and care about the small details that make software feel effortless.
				</motion.p>

				{available && (
					<motion.div
						className={styles.badge}
						variants={rise}
						transition={{ duration: 0.5, ease: "easeOut" }}
					>
						<span className={styles.badgeDot} />
						<span className={styles.badgeLabel}>Open to new opportunities</span>
					</motion.div>
				)}
			</motion.div>
		</section>
	);
}
