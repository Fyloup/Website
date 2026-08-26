import styles from "./Navbar.module.css";

const links = [
	{ href: "#work", label: "Work" },
	{ href: "#skills", label: "Skills" },
	{ href: "#education", label: "Education" },
	{ href: "#contact", label: "Contact" },
];

export function Navbar() {
	return (
		<header className={styles.root}>
			<div className={styles.inner}>
				<a href="#top" className={styles.brand}>
					<svg
						viewBox="0 0 100 100"
						width="26"
						height="26"
						className={styles.logo}
						aria-hidden="true"
					>
						<circle cx="33" cy="32" r="15" fill="currentColor" />
						<rect
							x="54"
							y="15"
							width="26"
							height="70"
							rx="13"
							fill="currentColor"
						/>
						<rect
							x="40"
							y="49"
							width="14"
							height="19"
							rx="7"
							fill="currentColor"
						/>
						<rect
							x="16"
							y="70"
							width="38"
							height="15"
							rx="7.5"
							fill="currentColor"
						/>
					</svg>
					<span className={styles.name}>Philippe Sirvente-Maroto</span>
				</a>
				<nav className={styles.nav}>
					{links.map((link) => (
						<a key={link.href} href={link.href} className={styles.link}>
							{link.label}
						</a>
					))}
				</nav>
			</div>
		</header>
	);
}
