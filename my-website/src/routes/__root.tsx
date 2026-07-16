import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Footer } from "#/components/Footer/Footer";
import { Navbar } from "#/components/Navbar/Navbar";

import "../styles.css";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
