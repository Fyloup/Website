import { useEffect, useRef, type ReactNode, type RefObject } from "react"
import styles from './SkillCard.module.css'
import Point from '../../assets/Point.svg'
import clsx from "clsx"

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'motion/react'

type SkillCardProps = {
    label: string;
    rarity: 10 | 5 | 3;
    logo: ReactNode;
    background?: ReactNode;
}

export function SkillCard({label, rarity, logo}: SkillCardProps) {

    const cardRef = useRef<HTMLDivElement>(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Smooth the movement
    const mouseX = useSpring(x, { stiffness: 250, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 250, damping: 20 });

    const glareX = useTransform(mouseX, [-150, 150], ["20%", "80%"]);
    const glareY = useTransform(mouseY, [-150, 150], ["20%", "80%"]);

    // Convert mouse position to rotation
    const rotateX = useTransform(mouseY, [-150, 150], [10, -10]);
    const rotateY = useTransform(mouseX, [-150, 150], [-10, 10]);


    const handleOnMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const innerX = e.clientX - rect.left;
        const innerY = e.clientY - rect.top; 

        const centeredX = innerX - rect.width / 2
        const centeredY = innerY - rect.height / 2

        x.set(centeredX)
        y.set(centeredY)
    };
    

    function handleOnMouseLeave() {
        x.set(0)
        y.set(0)
    }

    return (
        <div style={{perspective: 1000}}>
        <motion.div 
            className={styles.root}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                background: `
                        conic-gradient(from 0deg at ${glareX} ${glareY}, #FFF500FF 0%, #FFFFFFFF 50%, #FFCF07FF 100%)
                    `
                ,
                borderRadius: 12
            }}
            ref={cardRef}
            onMouseMove={handleOnMouseMove} 
            onMouseLeave={handleOnMouseLeave} 
        >
            {/* <motion.div 
                className={styles.shine}
                style={{
                    rotateX,
                    rotateY,
                    backgroundPositionX: rotateX,
                    backgroundPositionY: rotateY
                }}  
            /> */}

            {/* Cursor-tracking specular glare */}
            <motion.div
                className={styles.glare}
                style={{
                    background: `radial-gradient(circle at ${glareX}% ${glareY}%,
                        rgba(255,255,255,0.85) 0%,
                        rgba(255,255,255,0.25) 12%,
                        rgba(255,255,255,0) 45%)`,
                    opacity: 100,
                }}
            />


            {/* Card */}
            <div 
                className={styles.card} 
            >
                <div className={styles.innerCard}>
                    <div className={styles.labelContainer}>
                        <div className={styles.label}>
                            {label}
                        </div>
                    </div>
                    <div className={styles.rarity}>
                        <>
                            {Array.from({length: rarity}).map(() => 
                                <img className={styles.point} src={Point} alt="" />
                            )}
                        </>
                    </div>
                    <div className={styles.logoContainer}>
                        <img className={styles.logo} src={logo} alt=""/>
                    </div>
                </div>
            </div>
        </motion.div>
        </div>
    )
}