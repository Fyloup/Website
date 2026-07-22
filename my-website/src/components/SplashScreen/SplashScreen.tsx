import { createPortal } from "react-dom";
import { AnimatePresence, motion } from 'motion/react';

import styles from './SplashScreen.module.css'

type SplashScreenProps = {
    backgroundColor: string;
    isOpen: boolean;
    onLeave: () => void;
}

export function SplashScreen({
    backgroundColor = '#ffffff',
    isOpen, 
    onLeave
}: SplashScreenProps) {

    return (createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    className={styles.root} 
                    style={{backgroundColor: backgroundColor}}
                    key="modal" 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{ opacity: 0 }}
                >
                    <button onClick={onLeave}>
                        Leave
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
        , document.body)
    )
}