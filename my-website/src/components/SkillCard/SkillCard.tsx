import { useEffect, useRef, type ReactNode, type RefObject } from "react"
import styles from './SkillCard.module.css'
import Point from '../../assets/Point.svg'
import clsx from "clsx"

type SkillCardProps = {
    label: string;
    rarity: 10 | 5 | 3;
    logo: ReactNode;
    background?: ReactNode;
}

export function SkillCard({label, rarity, logo}: SkillCardProps) {

    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        if (cardRef && cardRef.current) {
            const cardRefCurrent = cardRef.current


        }
    }, [])

    const current = useRef({
        rotateX: 0,
        rotateY: 0,
    });

    const target = useRef({
        rotateX: 0,
        rotateY: 0,
    });

    const translate = useRef(0)

    const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
    ) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top; 

        const xPercent =
            (e.clientX - rect.left) / rect.width - 0.5;

        const yPercent =
            (e.clientY - rect.top) / rect.height - 0.5;

        target.current.rotateX = yPercent * -25;
        target.current.rotateY = xPercent * 25;
        translate.current = -20

        console.log('x', xPercent * 100)
        console.log('y', yPercent * 100)

        card.style.setProperty("--shine-x", `${(x / rect.width) * 100}%`);
        card.style.setProperty("--shine-y", `${(y / rect.height) * 100}%`);
    };
    

    function handleOnMouseLeave() {

        current.current = {rotateX: 0, rotateY: 0}
        target.current = {rotateX: 0, rotateY: 0}
        translate.current = 0

        if (cardRef.current) {
            cardRef.current.style.setProperty("--x", "50%");
            cardRef.current.style.setProperty("--y", "50%");

            cardRef.current.style.setProperty("--shine-x", `50%`);
            cardRef.current.style.setProperty("--shine-y", `50%`);
        }

        // const card = cardRef.current

        // if (!card) return;

        // card.style.transform = `
        //     perspective(1000px)
        //     rotateX(0deg)
        //     rotateY(0deg)
        // `;
        
        // card.style.setProperty(
        // "--sheen-rotation",
        // `25deg`
        // );

        // // Move sheen
        // card.style.setProperty(
        // "--sheen-x",
        // `0%`
        // );

        // card.style.setProperty(
        // "--sheen-y",
        // `0%`
        // );
    }

    useEffect(() => {
        let frame: number;

        const animate = () => {
            const card = cardRef.current;

            if (card) {
                current.current.rotateX +=
                    (target.current.rotateX -
                    current.current.rotateX) *
                    0.08;

                current.current.rotateY +=
                    (target.current.rotateY -
                    current.current.rotateY) *
                    0.08;

                card.style.transform = `
                    perspective(1000px)
                    rotateX(${current.current.rotateX}deg)
                    rotateY(${current.current.rotateY}deg)
                    translateY(${translate.current}px)
                `;
            }

            frame = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(frame);
    }, []);

    return (
        <div 
            className={clsx(styles.card, {
                [styles.master]: rarity == 10,
                [styles.standard]: rarity == 5
            })} 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleOnMouseLeave}
        >
            <div className={styles.innerCard}>
                <div className={styles.labelContainer}>
                    <div className={styles.label}>
                        {label}
                    </div>
                </div>
                <div className={styles.rarity}>
                    <>
                        {Array.from({length: rarity}).map(() => 
                            <img className={styles.point} src={Point} alt="" />
                        )}
                    </>
                </div>
                <div className={styles.logoContainer}>
                    <img className={styles.logo} src={logo} alt=""/>
                </div>
            </div>
        </div>
    )
}