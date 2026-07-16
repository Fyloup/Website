import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import styles from "./Projects.module.css";

type Project = {
	name: string;
	subtitle: string;
	role: string;
	period: string;
	description: string;
	highlights: string[];
	tags: string[];
};

// Ordered as they appear in the accordion (01 → 03).
const projects: Project[] = [
	{
		name: "Iris",
		subtitle: "Internal AI platform",
		role: "Full-stack",
		period: "2022 — Present",
		description:
			"The web application hosting Egis' internal AI product, deployed to 18,000 employees with 5,000 daily active users. Designed and developed features end-to-end.",
		highlights: [
			"Chat, leaderboard and gamification systems shipped end-to-end",
			"Custom logo-based loading screens and animated badge notifications",
			"Badge-linked challenges driving engagement at company scale",
		],
		tags: [
			"React",
			"TypeScript",
			"TanStack Query",
			"TanStack Router",
			"React Aria",
			"Redux",
		],
	},
	{
		name: "Memory",
		subtitle: "Personal product",
		role: "Solo — design & build",
		period: "2024",
		description:
			"A personal product I designed and built end-to-end — from the concept and interface design down to the component implementation.",
		highlights: [
			"Concept, interface design and implementation, done solo",
			"A playground for frontend architecture and animation",
			"Strong, user-centric design system",
		],
		tags: ["React", "TypeScript", "Vite", "Motion", "CSS Modules"],
	},
	{
		name: "SustainEcho",
		subtitle: "Sustainability platform",
		role: "Full-stack",
		period: "2021 — 2022",
		description:
			"A platform for greener building construction. Shipped components and systems end-to-end with a strong focus on user-centric design.",
		highlights: [
			"Dashboard, stepper and data table built from scratch",
			"Filtering, search and sorting across large datasets",
			"Design system in Figma + a full visual identity redesign",
		],
		tags: ["React", "TypeScript", "Ant Design", "Figma", "Design System"],
	},
];

export function Projects() {
	const [open, setOpen] = useState(0);

	return (
		<section id="work" className={styles.root}>
			<div className={styles.header}>
				<span className={styles.kicker}>Selected Work</span>
				<span className={styles.count}>
					({String(projects.length).padStart(2, "0")})
				</span>
			</div>

			<div className={styles.list}>
				{projects.map((project, index) => {
					const isOpen = open === index;
					const number = String(index + 1).padStart(2, "0");

					return (
						<div key={project.name} className={styles.item}>
							<button
								type="button"
								className={styles.row}
								aria-expanded={isOpen}
								onClick={() => setOpen(isOpen ? -1 : index)}
							>
								<span
									className={clsx(styles.number, isOpen && styles.numberActive)}
								>
									{number}
								</span>
								<span className={styles.rowMain}>
									<span className={styles.name}>{project.name}</span>
									<span className={styles.subtitle}>{project.subtitle}</span>
								</span>
								<span className={styles.rowMeta}>
									<span className={styles.role}>{project.role}</span>
									<span className={styles.period}>{project.period}</span>
									<span
										className={clsx(
											styles.toggle,
											isOpen && styles.toggleActive,
										)}
									>
										{isOpen ? "×" : "+"}
									</span>
								</span>
							</button>

							<AnimatePresence initial={false}>
								{isOpen && (
									<motion.div
										className={styles.panelWrap}
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
									>
										<div className={styles.panel}>
											<div className={styles.panelText}>
												<p className={styles.description}>
													{project.description}
												</p>
												<ul className={styles.highlights}>
													{project.highlights.map((highlight) => (
														<li key={highlight} className={styles.highlight}>
															<span className={styles.dash}>—</span>
															{highlight}
														</li>
													))}
												</ul>
												<div className={styles.tags}>
													{project.tags.map((tag) => (
														<span key={tag} className={styles.tag}>
															{tag}
														</span>
													))}
												</div>
											</div>
											<div className={styles.shot} aria-hidden="true">
												<span className={styles.shotBlobA} />
												<span className={styles.shotBlobB} />
												<span className={styles.shotLabel}>product shot</span>
											</div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					);
				})}
			</div>
		</section>
	);
}
