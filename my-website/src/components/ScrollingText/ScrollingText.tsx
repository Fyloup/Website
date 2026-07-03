
import { useState } from 'react'

import { getWordIndex, wordOptions } from './utils';

import styles from './ScrollingText.module.css'

export function ScrollingText() {

    const [wordIndex, setWordIndex] = useState<number>(getWordIndex());

    function handleOnAnimationIteration() {
        setWordIndex(getWordIndex())
    }
    
    return (
        <div className={styles.root}>
            <span className={styles.scrollingText} onAnimationIteration={handleOnAnimationIteration}>
                {`${wordOptions[wordIndex]}`}
            </span>
        </div>
    )
}