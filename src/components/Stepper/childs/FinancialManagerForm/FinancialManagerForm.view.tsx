import React from "react";

import styles from "./FinancialManagerForm.style.css";

import { Input } from "@components/Input";

import { FinancialManagerFormProps } from "./FinancialManagerForm";

export const FinancialManagerFormView: React.FC<FinancialManagerFormProps> = props => {
	return (
		<div className={styles.container}>
			<Input label={"Ф.И.О"} />
			<Input label={"Адрес"} />
			<Input label={"Телефон"} />
			<Input label={"Email"} />
		</div>
	);
};
