import clsx from "clsx";
import { useTranslation } from "react-i18next";

import englishFlag from "#/assets/skillcards/english.svg";
import franceFlag from "#/assets/skillcards/france.svg";
import { SUPPORTED_LANGUAGES, type SupportedLanguage } from "#/i18n";
import styles from "./LanguageSwitcher.module.css";

const flagIcons: Record<SupportedLanguage, string> = {
	en: englishFlag,
	fr: franceFlag,
};

export function LanguageSwitcher() {
	const { i18n, t } = useTranslation();
	const current = (i18n.resolvedLanguage ?? i18n.language) as SupportedLanguage;

	return (
		<div className={styles.root}>
			{SUPPORTED_LANGUAGES.map((lang) => (
				<button
					key={lang}
					type="button"
					className={clsx(styles.option, lang === current && styles.active)}
					aria-pressed={lang === current}
					aria-label={t("language.switchTo", {
						language: t(`language.${lang}`),
					})}
					onClick={() => i18n.changeLanguage(lang)}
				>
					<img src={flagIcons[lang]} alt="" className={styles.flag} />
				</button>
			))}
		</div>
	);
}
