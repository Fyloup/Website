import { AnimatePresence, motion, useMotionValue } from "motion/react";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { SplashScreen } from "../SplashScreen/SplashScreen";
import styles from "./Project.module.css";
import { type ProjectEntry, tagIcons } from "./utils";

type ProjectProps = {
	data: ProjectEntry;
};

export function Project({ data }: ProjectProps) {
	const diveButtonRef = useRef<HTMLButtonElement>(null);

	const [hasClickedViewButton, setHasClickedViewButton] = useState(false);
	const [isSplashScreenOpen, setIsSplashScreenOpen] = useState(false);
	const [isSplashScreenContentOpen, setIsSplashScreenContentOpen] =
		useState(false);

	const [splashCount, setSplashCount] = useState(0);

	const splashShapeX = useMotionValue(0);
	const splashShapeY = useMotionValue(0);

	const {
		name,
		role,
		company,
		description,
		highlights,
		tags,
		logoPath,
		accent,
		viewButtonText,
		splashSections,
	} = data;

	function handleViewButtonClick() {
		const diveButton = diveButtonRef.current;

		if (diveButton) {
			const diveButtonRect = diveButton.getBoundingClientRect();

			splashShapeX.set(diveButtonRect.top + diveButtonRect.height / 2);
			splashShapeY.set(diveButtonRect.left + diveButtonRect.width / 2);

			setHasClickedViewButton(true);
			setIsSplashScreenOpen(true);
		}
	}

	function handleOnAnimationComplete() {
		switch (splashCount % 2) {
			case 0:
				setIsSplashScreenContentOpen(true);
				break;
			case 1:
				setIsSplashScreenOpen(false);
				break;
			default:
				return;
		}

		setSplashCount(splashCount + 1);
	}

	function handleOnSplashScreenLeave() {
		setHasClickedViewButton(false);
		setIsSplashScreenContentOpen(false);
	}

	return (
		<div key={name} className={styles.item}>
			{/* Tile */}
			<div className={styles.row}>
				<span className={styles.number}>
					<img src={logoPath} alt="logo-path" height={56} width={56} />
				</span>
				<span className={styles.rowMain}>
					<span className={styles.name}>{name}</span>
					<span className={styles.subtitle}>
						{role} - {company}
					</span>
				</span>
				<span className={styles.rowMeta}>
					{createPortal(
						<AnimatePresence>
							{hasClickedViewButton && (
								<motion.div
									key="disc-accent"
									className={styles.splashShape}
									style={{
										top: splashShapeX.get(),
										left: splashShapeY.get(),
										backgroundColor: accent,
									}}
									initial={{
										width: 0,
										height: 0,
									}}
									animate={{
										width: 10_000,
										height: 10_000,
									}}
									exit={{
										width: 0,
										height: 0,
										transition: { duration: 1.1, delay: 0.2 },
									}}
									transition={{ duration: 1.9 }}
								/>
							)}
							{hasClickedViewButton && (
								<motion.div
									key="disc-white"
									className={styles.splashShape}
									style={{
										top: splashShapeX.get(),
										left: splashShapeY.get(),
										backgroundColor: "#fff",
									}}
									initial={{
										width: 0,
										height: 0,
									}}
									animate={{
										width: 10_000,
										height: 10_000,
									}}
									exit={{
										width: 0,
										height: 0,
										transition: { duration: 1.1 },
									}}
									transition={{ duration: 1.9, delay: 0.25 }}
									onAnimationComplete={handleOnAnimationComplete}
								/>
							)}
						</AnimatePresence>,
						document.body,
					)}
					<button
						type="button"
						className={styles.meetIrisButton}
						style={{
							backgroundColor: accent,
						}}
						ref={diveButtonRef}
						onClick={() => {
							handleViewButtonClick();
						}}
					>
						{viewButtonText}
						<span
							className={`material-symbols-rounded ${styles.meetIrisButtonIcon}`}
							aria-hidden="true"
						>
							arrow_forward
						</span>
					</button>
				</span>
			</div>

			{/* Overview content */}
			<div className={styles.panel}>
				<div className={styles.panelContent}>
					<p className={styles.description}>{description}</p>
					<ul className={styles.highlights}>
						{highlights.map((highlight) => (
							<li key={highlight} className={styles.highlight}>
								<span className={styles.dash}>—</span>
								{highlight}
							</li>
						))}
					</ul>
				</div>
				<div className={styles.tags}>
					{tags.map((tag) => {
						const icon = tagIcons[tag];

						return (
							<span key={tag} className={styles.tag} title={tag}>
								{icon && (
									<img
										src={icon}
										alt=""
										width={16}
										height={16}
										aria-hidden="true"
									/>
								)}
								{tag}
							</span>
						);
					})}
				</div>
			</div>

			<SplashScreen
				backgroundColor={"#fff"}
				isOpen={isSplashScreenOpen}
				isReady={isSplashScreenContentOpen}
				sections={splashSections}
				logoPath={logoPath}
				accent={accent}
				stack={tags}
				onLeave={handleOnSplashScreenLeave}
			/>
		</div>
	);
}
