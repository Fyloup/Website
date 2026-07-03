import { SkillCard } from '#/components/SkillCard/SkillCard'
import { createFileRoute } from '@tanstack/react-router'
import '../index.css'
import { Wrapper } from '#/components/Wrapper/Wrapper'
import ReactLogo from '../assets/skillcards/react/react.svg'
import { Skills } from '#/components/Sections/Skills/Skills'
import { HeroHeader } from '#/components/Sections/HeroHeader/HeroHeader'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <Wrapper>
      <HeroHeader/>
      <Skills/>
    </Wrapper>
  )
}
