import React from "react";
import { StepperView } from "./Stepper.view";

type TBanner = {
	icon: TSvg;
	title: string;
	description: string;
	color: TColor;
};

export type TStepperProps = {
	count: number;
	banner?: TBanner[];
};

export const Stepper: React.FC<TStepperProps> = props => {
	return <StepperView {...props} />;
};
