
export const wordOptions: string[] = ["a thought", "an idea", "a concept", "a view"];

export function getWordIndex() {
    return Math.floor(Math.random() * wordOptions.length)
}