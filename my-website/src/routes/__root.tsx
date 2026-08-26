import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "#/components/Navbar/Navbar";
import { ScrollToTop } from "#/components/ScrollToTop/ScrollToTop";

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
			<ScrollToTop />
		</>
	);
}
