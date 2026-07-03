
import { SkillCard } from "../../SkillCard/SkillCard"

import ReactLogo from '../../../assets/skillcards/react/react.svg'

export function Skills() {

    return (
        <div>
            <SkillCard label='React' rarity={10} logo={ReactLogo}/>
            <SkillCard label='React' rarity={5} logo={ReactLogo}/>
            <SkillCard label='React' rarity={3} logo={ReactLogo}/>
        </div>
    )
}