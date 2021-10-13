import React from "react";
import { ButtonView } from "./Button.view";

export type ButtonProps = {
	children: string;
	onClick?: React.MouseEventHandler;
};

export const Button: React.FC<ButtonProps> = props => {
	return <ButtonView {...props} />;
};
