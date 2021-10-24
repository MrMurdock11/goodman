import React from "react";

import { StepperView } from "./Stepper.view";

export type TStepperProps = {};

export const Stepper: React.FC<TStepperProps> = props => {
	return <StepperView {...props} />;
};
