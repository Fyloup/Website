
import { SkillCard } from "../../SkillCard/SkillCard"

import ReactLogo from '../../../assets/skillcards/react/react.svg'

import styles from './Skills.module.css'

export function Skills() {

    return (
        <div className={styles.root}>
            <SkillCard label='React' rarity={10} logo={ReactLogo}/>
            <SkillCard label='React' rarity={5} logo={ReactLogo}/>
            <SkillCard label='React' rarity={3} logo={ReactLogo}/>
            <SkillCard label='React' rarity={3} logo={ReactLogo}/>
            <SkillCard label='React' rarity={3} logo={ReactLogo}/>
            <SkillCard label='React' rarity={3} logo={ReactLogo}/>
            <SkillCard label='React' rarity={3} logo={ReactLogo}/>
            <SkillCard label='React' rarity={3} logo={ReactLogo}/>
            <SkillCard label='React' rarity={3} logo={ReactLogo}/>
            <SkillCard label='React' rarity={3} logo={ReactLogo}/>
            <SkillCard label='React' rarity={3} logo={ReactLogo}/>
            <SkillCard label='React' rarity={3} logo={ReactLogo}/>
            <SkillCard label='React' rarity={3} logo={ReactLogo}/>
            <SkillCard label='React' rarity={3} logo={ReactLogo}/>
            <SkillCard label='React' rarity={3} logo={ReactLogo}/>
        </div>
    )
}