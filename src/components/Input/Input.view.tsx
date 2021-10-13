import styles from "./Input.style.css";

import React from "react";
import { InputProps } from "./Input";

export const InputView: React.FC<InputProps> = (props) => {
	return <div className={styles.container}>{"Input"}</div>;
};
