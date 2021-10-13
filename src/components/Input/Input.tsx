import React from "react";
import { InputView } from "./Input.view";

type InputState = {
	/* your states */
};

export type InputProps = InputState;

export const Input: React.FC<InputProps> = (props) => {
	return <InputView {...props} />;
};

