import React from "react";

import styles from "./Input.style.css";

import { InputProps } from "./Input";

export const InputView: React.FC<InputProps> = props => {
	const { label, value } = props;

	return (
		<label className={styles.container}>
			<span className={styles.label}>{label}</span>
			<div className={styles.wrapper}>
				<input
					className={styles.input}
					type="text"
					defaultValue={value}
				/>
			</div>
		</label>
	);
};
