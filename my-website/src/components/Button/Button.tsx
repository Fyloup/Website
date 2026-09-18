import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "icon";

type CommonProps = {
	variant?: ButtonVariant;
	className?: string;
	children?: ReactNode;
};

type AnchorProps = CommonProps & { as: "a" } & ComponentPropsWithoutRef<"a">;
type NativeButtonProps = CommonProps & {
	as?: "button";
} & ComponentPropsWithoutRef<"button">;

export type ButtonProps = AnchorProps | NativeButtonProps;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
	function Button({ as, variant = "primary", className, children, ...rest }, ref) {
		const classes = [styles.button, styles[variant], className]
			.filter(Boolean)
			.join(" ");

		if (as === "a") {
			return (
				<a
					ref={ref as React.Ref<HTMLAnchorElement>}
					className={classes}
					{...(rest as ComponentPropsWithoutRef<"a">)}
				>
					{children}
				</a>
			);
		}

		const buttonRest = rest as ComponentPropsWithoutRef<"button">;
		return (
			<button
				ref={ref as React.Ref<HTMLButtonElement>}
				type={buttonRest.type ?? "button"}
				className={classes}
				{...buttonRest}
			>
				{children}
			</button>
		);
	},
);
