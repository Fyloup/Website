
import { useRef, useState, type ReactNode } from 'react'
import clsx from 'clsx';
import styles from './Project.module.css'
import { AnimatePresence, motion, useMotionValue } from 'motion/react';
import { createPortal } from 'react-dom';
import { SplashScreen } from '../SplashScreen/SplashScreen';

const data = {
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
}

export function Iris() {

    const diveButtonRef = useRef(null)

    const [isOpen, setIsOpen] = useState(false)
    const [hasDived, setHasDived] = useState(false)
    const [isSplashScreenOpen, setIsSplashScreenOpen] = useState(false)

    const splashShapeX = useMotionValue(0)
    const splashShapeY = useMotionValue(0)

    const {
        name,
        subtitle,
        description
    } = data

    function handleOnDive() {

        if (diveButtonRef.current) {
            const diveButton = diveButtonRef.current
            const diveButtonRect = diveButton.getBoundingClientRect()

            splashShapeX.set(diveButtonRect.top + (diveButtonRect.height / 2))
            splashShapeY.set(diveButtonRect.left + (diveButtonRect.width / 2))
            setHasDived(!hasDived)
        }
    }

    function handleOnAnimationComplete() {

        if (!isSplashScreenOpen)
            setIsSplashScreenOpen(true)
    }

    function handleOnSplashScreenLeave() {
        setIsSplashScreenOpen(false)
        setHasDived(false)
    }

    console.log('splashShapeX', splashShapeX)
    console.log('splashShapeY', splashShapeY)

    return (
		<div key={name} className={styles.item}>

            {/* Tile */}
            <button
                type="button"
                className={styles.row}
                aria-expanded={isOpen}
                onClick={() => {setIsOpen(!isOpen)}}
            >
                <span
                    className={clsx(styles.number, isOpen && styles.numberActive)}
                >
                    "Icon"
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
                            <div className={styles.diveButtonContainer}>
                                {createPortal(
                                    <AnimatePresence>
                                        {hasDived && (
                                            <motion.div 
                                                className={styles.splashShape}
                                                style={{
                                                    top: splashShapeX.get(),
                                                    left: splashShapeY.get()
                                                }}
                                                initial={{
                                                    width: 0,
                                                    height: 0
                                                }}
                                                animate={{
                                                    width: 5_000,
                                                    height: 5_000
                                                }}
                                                exit={{
                                                    width: 0,
                                                    height: 0
                                                }}
                                                transition={{duration: 1}}
                                                onAnimationComplete={handleOnAnimationComplete}
                                            />
                                        )}
                                    </AnimatePresence>
                                , document.body)}
                                <button 
                                    className={styles.meetIrisButton}
                                    ref={diveButtonRef}
                                    onClick={() => {handleOnDive()}}
                                >
                                    Meet Iris
                                </button>
                            </div>
                            {/* <div className={styles.shot} aria-hidden="true">
                                <span className={styles.shotBlobA} />
                                <span className={styles.shotBlobB} />
                                <span className={styles.shotLabel}>product shot</span>
                            </div> */}
                        </div>
                        <SplashScreen 
                            backgroundColor={"#fff"} 
                            isOpen={isSplashScreenOpen}
                            onLeave={handleOnSplashScreenLeave}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
		</div>
    )
}