import { createFileRoute } from '@tanstack/react-router'
import '../index.css'
import { Wrapper } from '#/components/Wrapper/Wrapper'
import { Skills } from '#/components/Sections/Skills/Skills'
import { HeroHeader } from '#/components/Sections/HeroHeader/HeroHeader'
import { Experience } from '#/components/Sections/Experience/Experience'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <Wrapper>
      <HeroHeader/>
      <Skills/>
      <Experience/>
    </Wrapper>
  )
}
