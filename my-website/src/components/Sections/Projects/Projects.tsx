import { AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { Project } from "#/components/Project/Project";
import {
	type ProjectEntry,
	projectsStruct,
	type SplashSection,
} from "#/components/Project/utils";
import styles from "./Projects.module.css";

export function Projects() {
	const { t } = useTranslation();

	return (
		<section id="work" className={styles.root}>
			<div className={styles.header}>
				<span className={styles.kicker}>{t("projects.kicker")}</span>
			</div>

			<div className={styles.list}>
				{projectsStruct.map((struct) => {
					const base = `projects.items.${struct.id}`;
					const project: ProjectEntry = {
						...struct,
						name: t(`${base}.name`),
						subtitle: t(`${base}.subtitle`),
						role: t(`${base}.role`),
						period: t(`${base}.period`),
						description: t(`${base}.description`),
						highlights: t(`${base}.highlights`, {
							returnObjects: true,
						}) as unknown as string[],
						viewButtonText: t(`${base}.viewButtonText`),
						splashSections: t(`${base}.splashSections`, {
							returnObjects: true,
						}) as unknown as SplashSection[],
					};

					return (
						<AnimatePresence key={struct.id}>
							<Project data={project} />
						</AnimatePresence>
					);
				})}
			</div>
		</section>
	);
}
