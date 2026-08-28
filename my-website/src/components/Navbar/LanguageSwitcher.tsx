import clsx from "clsx";
import { useTranslation } from "react-i18next";

import { SUPPORTED_LANGUAGES, type SupportedLanguage } from "#/i18n";
import styles from "./LanguageSwitcher.module.css";

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
					{t(`language.${lang}`)}
				</button>
			))}
		</div>
	);
}
