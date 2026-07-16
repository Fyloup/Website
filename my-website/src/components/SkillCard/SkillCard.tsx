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
                        {Array.from({length: rarity}, (_, index) => `point-${index}`).map((id) =>
                            <img key={id} className={styles.point} src={Point} alt="" />
                        )}
                    </div>
                    <div className={styles.logoContainer}>
                        {logo
                            ? <img className={styles.logo} src={logo} alt=""/>
                            : <span className={styles.monogram}>{label.slice(0, 2)}</span>
                        }
                    </div>
                </div>
            </div>

            {/* Frosted-glass sheen over the whole card */}
            <div className={styles.glass} />

            {/* Holographic rainbow/gold foil — confined to the border frame */}
            <motion.div
                className={styles.foil}
                style={{ backgroundPosition: foilPos }}
            />

            {/* Glitter speckle layer — confined to the border frame */}
            <motion.div
                className={styles.sparkle}
                style={{ backgroundPosition: sparklePos }}
            />

            {/* Cursor-tracking specular glare */}
            <motion.div
                className={styles.glare}
                style={{
                    background: `radial-gradient(circle at ${glareX}% ${glareY}%,
                        rgba(255,255,255,0.85) 0%,
                        rgba(255,255,255,0.25) 12%,
                        rgba(255,255,255,0) 45%)`,
                }}
            />
        </motion.div>
        </div>
    )
}