import React from "react";

import { InputView } from "./Input.view";

export type InputProps = {
	label: string;
	value?: string;
	onChange?: React.ChangeEventHandler;
};

export const Input: React.FC<InputProps> = props => {
	return <InputView {...props} />;
};

Input.defaultProps = {
	value: "",
};
