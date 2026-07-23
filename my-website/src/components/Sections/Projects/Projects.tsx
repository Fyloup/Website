import { AnimatePresence, motion } from "motion/react";
import styles from "./Projects.module.css";
import { projectsData } from "#/components/Project/utils";
import { Project } from "#/components/Project/Project";

export function Projects() {

	return (
		<section id="work" className={styles.root}>
			<div className={styles.list}>
				{projectsData.map((project) => {

					return (
						<AnimatePresence>
							<Project data={project}/>
						</AnimatePresence>
					);
				})}
			</div>
		</section>
	);
}
