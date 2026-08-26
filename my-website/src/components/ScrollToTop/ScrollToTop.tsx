import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp } from "lucide-react";

import styles from "./ScrollToTop.module.css";

const SHOW_AFTER_PX = 480;

export function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		function handleScroll() {
			setIsVisible(window.scrollY > SHOW_AFTER_PX);
		}

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	function handleClick() {
		document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					type="button"
					className={styles.button}
					onClick={handleClick}
					aria-label="Back to top"
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 12 }}
					transition={{ duration: 0.2, ease: "easeOut" }}
				>
					<ArrowUp size={18} strokeWidth={1.75} />
				</motion.button>
			)}
		</AnimatePresence>
	);
}
