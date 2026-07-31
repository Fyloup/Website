import { useRef, type ReactNode } from "react"
import styles from './SkillCard.module.css'
import Point from '../../assets/Point.svg'
import BackendType from '../../assets/skillcards/types/backendType.png'

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import clsx from "clsx"

type SkillCardProps = {
    label: string;
    rarity: "gold" | "silver" | "basic";
    logo?: string;
    background?: ReactNode;
    description: string;
}

export function SkillCard({label, rarity, logo, description}: SkillCardProps) {

    const cardRef = useRef<HTMLDivElement>(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Smooth the movement
    const mouseX = useSpring(x, { stiffness: 250, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 250, damping: 20 });

    // Convert mouse position to rotation
    const rotateX = useTransform(mouseY, [-150, 150], [7, -7]);
    const rotateY = useTransform(mouseX, [-150, 150], [-7, 7]);

    const translateX = useTransform(mouseY, [-150, 150], [10, -10]);
    const translateY = useTransform(mouseX, [-150, 150], [10, -10]);

    const translateShineX = useTransform(mouseY, [-150, 150], [25, -25]);
    const translateShineY = useTransform(mouseX, [-150, 150], [25, -25]);

    const translate2X = useTransform(mouseY, [-150, 150], [35, -35]);
    const translate2Y = useTransform(mouseX, [-150, 150], [35, -35]);

    const translateDotX = useTransform(mouseY, [-150, 0, 150], [150, 0, -150]);
    const translateDotY = useTransform(mouseX, [-150, 0, 150], [-150, 0, 150]);


    const handleOnMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const innerX = e.clientX - rect.left;
        const innerY = e.clientY - rect.top; 

        const centeredX = innerX - rect.width / 2
        const centeredY = innerY - rect.height / 2

        console.log('', centeredX, centeredY)

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
                    rotateX: rotateX,
                    rotateY: rotateY,
                }}
                ref={cardRef}
                onMouseMove={handleOnMouseMove} 
                onMouseLeave={handleOnMouseLeave} 
        >
            {rarity === "gold" || rarity === "silver" ? (
                <motion.div
                    className={styles.cardShineEffect}
                    style={{
                        x: translateShineX,
                        y: translateShineY
                    }}
                />
            ) : null}

            <motion.div
                className={clsx(styles.cardBaseRarityEffect, styles[rarity])}
                style={{
                    x: translateX,
                    y: translateY
                }}
            />
            {rarity === "gold" ? (
                <motion.div
                    className={styles.cardRainbowEffect}
                    style={{
                        x: translate2X,
                        y: translate2Y
                    }}
                />
            ) : null}
            <motion.div 
                className={styles.glare} 
                style={{x: translateShineX, y: translateShineY}}
            />

            {/* Card */}
            <div 
                className={styles.card}
            >
                <div className={styles.innerCard}>
                    <div className={styles.labelContainer}>
                        <div className={styles.label}>
                            {label}
                            <img className={styles.type} src={BackendType} alt="backend-type"/>
                        </div>
                    </div>
                    <div className={styles.illustrationWrapper}>
                        <div className={styles.illustrationContainer}>
                            <div className={styles.illustration}>
                                {logo
                                    ? <img className={styles.logo} src={logo} alt=""/>
                                    : <span className={styles.monogram}>{label.slice(0, 2)}</span>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles.descriptionWrapper}>
                        <div className={styles.description}>
                            <div className={styles.descriptionValue}>
                                <img className={styles.type} src={BackendType} alt="backend-type"/>
                                <img className={styles.type} src={BackendType} alt="backend-type"/>
                                <img className={styles.type} src={BackendType} alt="backend-type"/>
                            </div>
                            {description}
                        </div>
                        <div className={styles.subDescription}>
                            I have professional experience with this technology
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        </div>

    )
}