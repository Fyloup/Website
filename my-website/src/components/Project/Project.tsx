
import { useRef, useState } from 'react'
import clsx from 'clsx';
import styles from './Project.module.css'
import { AnimatePresence, motion, useMotionValue } from 'motion/react';
import { createPortal } from 'react-dom';
import { SplashScreen } from '../SplashScreen/SplashScreen';
import IrisLogo from '../../assets/projects/iris/irisLogo.png'
import type { ProjectEntry } from './utils';

type ProjectProps = {
    data: ProjectEntry
}

export function Project({data}: ProjectProps) {

    const diveButtonRef = useRef<HTMLButtonElement>(null)

    const [isOverviewOpen, setIsOverviewOpen] = useState(false)
    const [hasClickedViewButton, setHasClickedViewButton] = useState(false)
    const [isSplashScreenOpen, setIsSplashScreenOpen] = useState(false)
    const [isSplashScreenContentOpen, setIsSplashScreenContentOpen] = useState(false)

    const [splashCount, setSplashCount] = useState(0)

    const splashShapeX = useMotionValue(0)
    const splashShapeY = useMotionValue(0)

    const {
        name,
        subtitle,
        description,
        highlights,
        tags
    } = data

    function handleViewButtonClick() {

        const diveButton = diveButtonRef.current

        if (diveButton) {
            const diveButtonRect = diveButton.getBoundingClientRect()

            splashShapeX.set(diveButtonRect.top + (diveButtonRect.height / 2))
            splashShapeY.set(diveButtonRect.left + (diveButtonRect.width / 2))

            setHasClickedViewButton(true)
            setIsSplashScreenOpen(true)
        }
    }

    function handleOnAnimationComplete() {

        switch(splashCount % 2) {
            case 0:
                setIsSplashScreenContentOpen(true)
                break
            case 1:
                setIsSplashScreenOpen(false)
                break
            default:
                return
        }

        setSplashCount(splashCount + 1)
    }

    function handleOnSplashScreenLeave() {
        setHasClickedViewButton(false)
        setIsSplashScreenContentOpen(false)
    }

    return (
		<div key={name} className={styles.item}>

            {/* Tile */}
            <button
                type="button"
                className={styles.row}
                aria-expanded={isOverviewOpen}
                onClick={() => {setIsOverviewOpen(!isOverviewOpen)}}
            >
                <span
                    className={clsx(styles.number, isOverviewOpen && styles.numberActive)}
                >
                    <img src={IrisLogo} alt='irisLogo' height={56} width={56}/>
                </span>
                <span className={styles.rowMain}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.subtitle}>{subtitle}</span>
                </span>
                <span className={styles.rowMeta}>
                    <span
                        className={clsx(
                            styles.toggle,
                            isOverviewOpen && styles.toggleActive,
                        )}
                    >
                        {isOverviewOpen ? "×" : "+"}
                    </span>
                </span>
            </button>

            {/* Overview content */}
            <AnimatePresence initial={false} onExitComplete={() => {console.log('exit')}}>
                {isOverviewOpen && (
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
                                <ul className={styles.highlights}>
                                    {highlights.map((highlight) => (
                                        <li key={highlight} className={styles.highlight}>
                                            <span className={styles.dash}>—</span>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                                <div className={styles.tags}>
                                    {tags.map((tag) => (
                                        <span key={tag} className={styles.tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.diveButtonContainer}>
                                {createPortal(
                                    <AnimatePresence>
                                        {hasClickedViewButton && (
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
                                                transition={{duration: 0.7}}
                                                onAnimationComplete={handleOnAnimationComplete}
                                            />
                                        )}
                                    </AnimatePresence>
                                , document.body)}
                                <button 
                                    className={styles.meetIrisButton}
                                    ref={diveButtonRef}
                                    onClick={() => {handleViewButtonClick()}}
                                >
                                    Meet Iris
                                </button>
                            </div>
                        </div>
                        <SplashScreen 
                            backgroundColor={"#fff"} 
                            isOpen={isSplashScreenOpen}
                            isReady={isSplashScreenContentOpen}
                            onLeave={handleOnSplashScreenLeave}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
		</div>
    )
}