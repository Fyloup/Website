import { createPortal } from "react-dom";
import { AnimatePresence, motion } from 'motion/react';
import { X } from "lucide-react";

import styles from './SplashScreen.module.css'
import { useEffect } from "react";
import type { SplashSection } from "../Project/utils";

type SplashScreenProps = {
    backgroundColor: string;
    isOpen: boolean;
    isReady: boolean;
    sections: SplashSection[];
    onLeave: () => void;
}

export function SplashScreen({
    backgroundColor = '#ffffff',
    isOpen,
    isReady,
    sections,
    onLeave
}: SplashScreenProps) {

    useEffect(() => {

        if (isOpen) {
            document.body.style.overflowY = "hidden"
        } else if (!isOpen) {
            document.body.style.overflowY = "auto"
        }
    }, [isOpen])

    if (!isOpen)
        return

    return (createPortal(
        <div className={styles.root}>
            <AnimatePresence>
                {isReady && (
                    <motion.div
                        className={styles.contentWrapper}
                        style={{backgroundColor: backgroundColor}}
                        key="modal"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{ opacity: 0 }}
                    >
                        <button className={styles.leaveButton} onClick={onLeave} aria-label="Close">
                            <X size={16} strokeWidth={1.75} />
                            Leave
                        </button>

                        <div className={styles.scrollArea}>
                            {sections.map((section, index) => (
                                <section key={section.title} className={styles.section}>
                                    <div className={styles.sectionText}>
                                        <span className={styles.sectionIndex}>
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <h3 className={styles.sectionTitle}>{section.title}</h3>
                                        <p className={styles.sectionBody}>{section.body}</p>
                                        {section.bullets && (
                                            <ul className={styles.sectionBullets}>
                                                {section.bullets.map((bullet) => (
                                                    <li key={bullet}>{bullet}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    <div className={styles.sectionIllustration} aria-hidden="true" />
                                </section>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
        , document.body)
    )
}
