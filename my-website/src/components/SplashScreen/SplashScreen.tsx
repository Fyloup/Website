import { createPortal } from "react-dom";
import { AnimatePresence, motion } from 'motion/react';

import styles from './SplashScreen.module.css'
import { useEffect, useRef } from "react";

type SplashScreenProps = {
    backgroundColor: string;
    isOpen: boolean;
    isReady: boolean;
    onLeave: () => void;
}

export function SplashScreen({
    backgroundColor = '#ffffff',
    isOpen,
    isReady,
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
                        <button className={styles.leaveButton} onClick={onLeave}>
                            Leave
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
        , document.body)
    )
}