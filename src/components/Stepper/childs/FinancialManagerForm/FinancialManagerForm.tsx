import React from "react";
import { FinancialManagerFormView } from "./FinancialManagerForm.view";

type FinancialManagerFormState = {
	/* your states */
};

export type FinancialManagerFormProps = FinancialManagerFormState;

export const FinancialManagerForm: React.FC<FinancialManagerFormProps> = (props) => {
	return <FinancialManagerFormView {...props} />;
};

