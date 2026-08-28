import { useTranslation } from "react-i18next";

import { LanguageSwitcher } from "./LanguageSwitcher";
import styles from "./Navbar.module.css";

const links = [
	{ href: "#work", labelKey: "nav.work" },
	{ href: "#skills", labelKey: "nav.skills" },
	{ href: "#education", labelKey: "nav.education" },
	{ href: "#contact", labelKey: "nav.contact" },
];

export function Navbar() {
	const { t } = useTranslation();

	return (
		<header className={styles.root}>
			<div className={styles.inner}>
				<a href="#top" className={styles.brand}>
					<span className={styles.name}>Philippe Sirvente-Maroto</span>
				</a>
				<nav className={styles.nav}>
					{links.map((link) => (
						<a key={link.href} href={link.href} className={styles.link}>
							{t(link.labelKey)}
						</a>
					))}
					<LanguageSwitcher />
				</nav>
			</div>
		</header>
	);
}
