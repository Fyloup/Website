import { motion } from 'motion/react'

import styles from './ProjectCard.module.css'

export type Project = {
    name: string
    tagline: string
    context: string
    period: string
    description: string
    tags: string[]
    /** Optional accent color override for the card (defaults to the theme accent). */
    accent?: string
}

type ProjectCardProps = {
    project: Project
    /** Index in the list — used to alternate the layout direction. */
    index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    const reversed = index % 2 === 1

    return (
        <motion.article
            className={styles.root}
            data-reversed={reversed}
            style={project.accent ? ({ '--card-accent': project.accent } as React.CSSProperties) : undefined}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 90, damping: 18 }}
            whileHover={{ y: -6 }}
        >
            <div className={styles.aside} aria-hidden="true">
                <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
            </div>

            <div className={styles.body}>
                <div className={styles.meta}>
                    <span className={styles.context}>{project.context}</span>
                    <span className={styles.period}>{project.period}</span>
                </div>

                <h3 className={styles.name}>{project.name}</h3>
                <p className={styles.tagline}>{project.tagline}</p>
                <p className={styles.description}>{project.description}</p>

                <ul className={styles.tags}>
                    {project.tags.map((tag) => (
                        <li key={tag} className={styles.tag}>{tag}</li>
                    ))}
                </ul>
            </div>
        </motion.article>
    )
}
