import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Button } from "#/components/Button/Button";
import { type SplashSection, tagIcons } from "../Project/utils";
import styles from "./SplashScreen.module.css";

type SplashScreenProps = {
    backgroundColor: string;
    isOpen: boolean;
    isReady: boolean;
    sections: SplashSection[];
    logoPath: string;
    accent: string;
    stack: string[];
    onLeave: () => void;
}

/**
 * Every project's splash follows the same section arc:
 * Context → Problem → Role → Build → Decisions → Impact.
 * The right-hand panel is derived from that position: the logo animates on the
 * opening Context section, the stack scrolls on Decisions, and every other
 * section gets a generic accent-tinted pattern.
 */
type PanelKind = "logo" | "stack" | "pattern";

function panelKindForIndex(index: number): PanelKind {
    if (index === 0) return "logo";
    if (index === 4) return "stack";
    return "pattern";
}

type AccentStyle = React.CSSProperties & { "--accent": string };

function LogoPanel({ logoPath, accent }: { logoPath: string; accent: string }) {
    return (
        <div
            className={`${styles.sectionIllustration} ${styles.logoPanel}`}
            style={{ "--accent": accent } as AccentStyle}
            aria-hidden="true"
        >
            <motion.span
                className={styles.logoGlow}
                animate={{ opacity: [0.3, 0.55, 0.3], scale: [0.85, 1.08, 0.85] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
                src={logoPath}
                alt=""
                className={styles.logoMark}
                animate={{ y: [-10, 10, -10], rotate: [-1.5, 1.5, -1.5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}

function StackPanel({ stack, accent }: { stack: string[]; accent: string }) {
    const icons = stack
        .map((tag) => ({ tag, icon: tagIcons[tag] }))
        .filter((entry): entry is { tag: string; icon: string } => Boolean(entry.icon));

    if (icons.length === 0) {
        return <PatternPanel accent={accent} index={2} />;
    }

    // Pad to a multiple of the column count so each copy fills whole rows,
    // then double it so the vertical translate can loop seamlessly.
    const COLUMNS = 4;
    const padded = [...icons];
    while (padded.length % COLUMNS !== 0) {
        padded.push(icons[padded.length % icons.length]);
    }
    const loop = [...padded, ...padded];

    return (
        <div
            className={`${styles.sectionIllustration} ${styles.stackPanel}`}
            style={{ "--accent": accent } as AccentStyle}
            aria-hidden="true"
        >
            <div className={styles.stackTrack}>
                {loop.map((entry, index) => (
                    // Tags repeat across the doubled loop, so the index is part of the key.
                    // biome-ignore lint/suspicious/noArrayIndexKey: list is static and never reordered
                    <span key={`${entry.tag}-${index}`} className={styles.stackChip} title={entry.tag}>
                        <img src={entry.icon} alt="" width={28} height={28} />
                    </span>
                ))}
            </div>
        </div>
    );
}

function PatternPanel({ accent, index }: { accent: string; index: number }) {
    const dotsId = `splash-dots-${index}`;

    return (
        <div
            className={`${styles.sectionIllustration} ${styles.patternPanel}`}
            style={{ "--accent": accent } as AccentStyle}
            aria-hidden="true"
        >
            <svg
                viewBox="0 0 400 300"
                preserveAspectRatio="xMidYMid slice"
                className={styles.patternSvg}
                aria-hidden="true"
            >
                <defs>
                    <pattern id={dotsId} width="26" height="26" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.5" fill="currentColor" opacity="0.18" />
                    </pattern>
                </defs>
                <rect width="400" height="300" fill={`url(#${dotsId})`} />
                <circle cx={index % 2 === 0 ? 300 : 110} cy="90" r="120" fill="currentColor" opacity="0.08" />
                <circle cx={index % 2 === 0 ? 90 : 320} cy="240" r="80" fill="currentColor" opacity="0.06" />
            </svg>
        </div>
    );
}

export function SplashScreen({
    backgroundColor = '#ffffff',
    isOpen,
    isReady,
    sections,
    logoPath,
    accent,
    stack,
    onLeave
}: SplashScreenProps) {

    const scrollAreaRef = useRef<HTMLDivElement>(null);
    const activeIndexRef = useRef(0);
    const lockRef = useRef(false);

    useEffect(() => {

        if (isOpen) {
            document.body.style.overflowY = "hidden"
        } else if (!isOpen) {
            document.body.style.overflowY = "auto"
        }
    }, [isOpen])

    useEffect(() => {
        if (!isOpen)
            return

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                onLeave()
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [isOpen, onLeave])

    // One section per scroll gesture — no free scrolling between them.
    useEffect(() => {
        if (!isOpen || !isReady)
            return

        if (!scrollAreaRef.current)
            return

        const area = scrollAreaRef.current
        const count = sections.length
        const first = area.children[0] as HTMLElement | undefined

        activeIndexRef.current = 0
        area.scrollTo({ top: 0 })

        function goTo(target: number) {
            const next = Math.max(0, Math.min(target, count - 1))
            if (next === activeIndexRef.current || !first)
                return

            activeIndexRef.current = next
            lockRef.current = true

            const el = area.children[next] as HTMLElement
            area.scrollTo({ top: el.offsetTop - first.offsetTop, behavior: "smooth" })

            window.setTimeout(() => {
                lockRef.current = false
            }, 800)
        }

        function step(delta: number) {
            if (lockRef.current)
                return
            goTo(activeIndexRef.current + (delta > 0 ? 1 : -1))
        }

        function handleWheel(event: WheelEvent) {
            event.preventDefault()
            if (Math.abs(event.deltaY) < 8)
                return
            step(event.deltaY)
        }

        function handleNavKey(event: KeyboardEvent) {
            if ((event.target as HTMLElement | null)?.closest("button"))
                return

            switch (event.key) {
                case "ArrowDown":
                case "PageDown":
                case " ":
                    event.preventDefault()
                    step(1)
                    break
                case "ArrowUp":
                case "PageUp":
                    event.preventDefault()
                    step(-1)
                    break
                case "Home":
                    event.preventDefault()
                    goTo(0)
                    break
                case "End":
                    event.preventDefault()
                    goTo(count - 1)
                    break
            }
        }

        let touchStartY = 0

        function handleTouchStart(event: TouchEvent) {
            touchStartY = event.touches[0].clientY
        }

        function handleTouchMove(event: TouchEvent) {
            event.preventDefault()
        }

        function handleTouchEnd(event: TouchEvent) {
            const delta = touchStartY - event.changedTouches[0].clientY
            if (Math.abs(delta) < 40)
                return
            step(delta)
        }

        area.addEventListener("wheel", handleWheel, { passive: false })
        area.addEventListener("touchstart", handleTouchStart, { passive: true })
        area.addEventListener("touchmove", handleTouchMove, { passive: false })
        area.addEventListener("touchend", handleTouchEnd, { passive: true })
        window.addEventListener("keydown", handleNavKey)

        return () => {
            area.removeEventListener("wheel", handleWheel)
            area.removeEventListener("touchstart", handleTouchStart)
            area.removeEventListener("touchmove", handleTouchMove)
            area.removeEventListener("touchend", handleTouchEnd)
            window.removeEventListener("keydown", handleNavKey)
            lockRef.current = false
        }
    }, [isOpen, isReady, sections.length])

    if (!isOpen)
        return

    return (createPortal(
        <div className={styles.root}>
            <AnimatePresence>
                {isReady && (
                    <motion.div
                        className={styles.contentWrapper}
                        style={{backgroundColor: backgroundColor}}
                        key="modal"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.05 }}
                    >
                        <Button variant="secondary" className={styles.leaveButton} onClick={onLeave} aria-label="Close">
                            <X size={16} strokeWidth={1.75} />
                            Leave
                        </Button>

                        <div className={styles.scrollArea} ref={scrollAreaRef}>
                            {sections.map((section, index) => {
                                const kind = panelKindForIndex(index);

                                return (
                                    <section key={section.title} className={styles.section}>
                                        <div className={styles.sectionText}>
                                            <h3 className={styles.sectionTitle}>{section.title}</h3>
                                            <p className={styles.sectionBody}>{section.body}</p>
                                            {section.bullets && (
                                                <ul className={styles.sectionBullets}>
                                                    {section.bullets.map((bullet) => (
                                                        <li key={bullet}>{bullet}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                        {kind === "logo" && <LogoPanel logoPath={logoPath} accent={accent} />}
                                        {kind === "stack" && <StackPanel stack={stack} accent={accent} />}
                                        {kind === "pattern" && <PatternPanel accent={accent} index={index} />}
                                    </section>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
        , document.body)
    )
}
