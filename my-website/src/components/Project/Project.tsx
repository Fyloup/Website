
import type { ReactNode } from 'react'
import clsx from 'clsx';
import styles from './Project.module.css'
import { AnimatePresence, motion } from 'motion/react';

type ProjectProps = {
    icon: ReactNode;
    name: string;
    subtitle: string;
    description: string;
    isOpen: boolean;
    onClick: () => void;
}

export function Project({icon, name, subtitle, description, isOpen, onClick}: ProjectProps) {

    return (
		<div key={name} className={styles.item}>

            {/* Tile */}
            <button
                type="button"
                className={styles.row}
                aria-expanded={isOpen}
                onClick={onClick}
            >
                <span
                    className={clsx(styles.number, isOpen && styles.numberActive)}
                >
                    {icon}
                </span>
                <span className={styles.rowMain}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.subtitle}>{subtitle}</span>
                </span>
                <span className={styles.rowMeta}>
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

            {/* Overview content */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        className={styles.panelWrap}
                        initial={{ height: 0, opacity: 1 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 1 }}
                        transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
                    >
                        <div className={styles.panel}>
                            <div className={styles.panelText}>
                                <p className={styles.description}>
                                    {description}
                                </p>
                                {/* <ul className={styles.highlights}>
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
                                </div> */}
                            </div>
                            {/* <div className={styles.shot} aria-hidden="true">
                                <span className={styles.shotBlobA} />
                                <span className={styles.shotBlobB} />
                                <span className={styles.shotLabel}>product shot</span>
                            </div> */}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
		</div>
    )
}