import { useRef, type ReactNode } from "react"
import styles from './SkillCard.module.css'
import Point from '../../assets/Point.svg'

import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'motion/react'

type SkillCardProps = {
    label: string;
    rarity: 10 | 5 | 3;
    logo?: string;
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

    // Holographic foil position — parallaxes opposite to the pointer so the
    // rainbow sheen "slides" across the card as it tilts.
    const foilX = useTransform(mouseX, [-150, 150], ["120%", "-20%"]);
    const foilY = useTransform(mouseY, [-150, 150], ["120%", "-20%"]);
    const foilPos = useMotionTemplate`${foilX} ${foilY}`;

    // Glitter drifts more subtly than the foil for a layered, metallic feel.
    const sparkleX = useTransform(mouseX, [-150, 150], ["40%", "60%"]);
    const sparkleY = useTransform(mouseY, [-150, 150], ["40%", "60%"]);
    const sparklePos = useMotionTemplate`${sparkleX} ${sparkleY}`;

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
        <div className={styles.root}>
            <motion.div 
                className={styles.card}
                style={{
                    rotateX,
                    rotateY,
                    // background: `
                    //         conic-gradient(from 0deg at ${glareX} ${glareY}, #FFF500FF 0%, #FFFFFFFF 50%, #FFCF07FF 100%)
                    //     `
                    // ,
                }}
                ref={cardRef}
                onMouseMove={handleOnMouseMove} 
                onMouseLeave={handleOnMouseLeave} 
            >
                {/* Card */}
                <div className={styles.innerCard}>
                    <div className={styles.labelContainer}>
                        <div className={styles.label}>
                            {label}
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
                </div>
            </motion.div>
        </div>
    )
}