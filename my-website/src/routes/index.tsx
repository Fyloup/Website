import { createFileRoute } from "@tanstack/react-router";
import "../index.css";
import { About } from "#/components/Sections/About/About";
import { Contact } from "#/components/Sections/Contact/Contact";
import { HeroHeader } from "#/components/Sections/HeroHeader/HeroHeader";
import { Projects } from "#/components/Sections/Projects/Projects";
import { Skills } from "#/components/Sections/Skills/Skills";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<>
			<HeroHeader />
			<Projects />
			<Skills />
			<About />
			<Contact />
		</>
	);
}
