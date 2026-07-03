
import { ScrollingText } from '#/components/ScrollingText/ScrollingText'

import styles from './HeroHeader.module.css'

export function HeroHeader() {

    return (
        <div className={styles.root}>
            <div className={styles.headingContainer}>
                <div className={styles.headingStart}>
                    <p>
                        Turning
                    </p>
                    <ScrollingText/>
                </div>
                <div className={styles.headingEnd}>
                    <p>
                        into anything
                    </p>
                </div>
            </div>
            <p>
                I'm Philippe Sirvente-Maroto, web developer with 5 years of experience specializing in frontend architecture, technology stack selection, and scalable
                design systems. Strong expertise in UI/UX, from visual design to component implementation.
                Experienced in auditing, modernizing, and scaling existing frontend
                applications through architecture redesign, design system implementation, quality tooling and full-stack development.
            </p>
        </div>
    )
}