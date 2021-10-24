declare namespace StepperStyleCssNamespace {
	export interface IStepperStyleCss {
		active: string;
		container: string;
		controls: string;
		form: string;
		item: string;
		navigation: string;
	}
}

declare const StepperStyleCssModule: StepperStyleCssNamespace.IStepperStyleCss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: StepperStyleCssNamespace.IStepperStyleCss;
};

export = StepperStyleCssModule;
