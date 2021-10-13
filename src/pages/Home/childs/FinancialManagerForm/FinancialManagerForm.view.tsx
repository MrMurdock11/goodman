import styles from "./FinancialManagerForm.style.css";

import React from "react";
import { FinancialManagerFormProps } from "./FinancialManagerForm";

export const FinancialManagerFormView: React.FC<FinancialManagerFormProps> = (props) => {
	return <div className={styles.container}>{"FinancialManagerForm"}</div>;
};
