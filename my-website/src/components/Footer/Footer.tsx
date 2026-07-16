import styles from "./Footer.module.css";

export function Footer() {
	return (
		<footer className={styles.root}>
			<div className={styles.inner}>
				<span>© 2026 Philippe Sirvente-Maroto</span>
				<span>Built with React &amp; TypeScript</span>
			</div>
		</footer>
	);
}
