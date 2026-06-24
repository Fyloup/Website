import { SkillCard } from '#/components/SkillCard/SkillCard'
import { createFileRoute } from '@tanstack/react-router'
import '../index.css'
import { Wrapper } from '#/components/Wrapper/Wrapper'
import ReactLogo from '../assets/react.svg'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <Wrapper>
      <SkillCard label='React' rarity={10} logo={ReactLogo}/>
    </Wrapper>
  )
}
