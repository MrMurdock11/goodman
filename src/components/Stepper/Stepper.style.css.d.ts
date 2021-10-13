declare namespace StepperStyleCssNamespace {
	export interface IStepperStyleCss {
		active: string;
		banner: string;
		container: string;
		controls: string;
		description: string;
		form: string;
		image: string;
		imageWrapper: string;
		item: string;
		navigation: string;
		title: string;
		wrapper: string;
	}
}

declare const StepperStyleCssModule: StepperStyleCssNamespace.IStepperStyleCss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: StepperStyleCssNamespace.IStepperStyleCss;
};

export = StepperStyleCssModule;
