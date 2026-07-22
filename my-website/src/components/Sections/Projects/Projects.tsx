import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import styles from "./Projects.module.css";
import { Project } from "#/components/Project/Project";
import { Iris } from "#/components/Project/Iris";

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
		subtitle: "Projects centralization tool",
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

			<div className={styles.list}>
				<Iris/>
				{/* {projects.map((project, index) => {
					const isOpen = open === index;
					const number = String(index + 1).padStart(2, "0");
					const {
						name,
						subtitle,
						description
					} = project;

					return (
						<Project 
							icon={"Icon"} 
							name={name} 
							subtitle={subtitle}
							description={description}
							isOpen={isOpen}
							onClick={() => {setOpen(open === index ? 0 : index)}}
						/>
					);
				})} */}
			</div>
		</section>
	);
}
