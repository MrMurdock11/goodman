import styles from "./Button.style.css";

import React from "react";
import { ButtonProps } from "./Button";

export const ButtonView: React.FC<ButtonProps> = props => {
	const { children, onClick } = props;

	return (
		<button className={styles.button} onClick={onClick}>
			{children}
		</button>
	);
};
