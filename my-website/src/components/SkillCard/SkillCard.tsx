import type { ReactNode } from "react"
import styles from './SkillCard.module.css'
import Point from '../../assets/Point.svg'

type SkillCardProps = {
    label: string;
    rarity: 10 | 5 | 3;
    logo: ReactNode;
    background?: ReactNode;
}

export function SkillCard({label, rarity, logo}: SkillCardProps) {

    return (
        <div className={styles.card}>
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
    )
}