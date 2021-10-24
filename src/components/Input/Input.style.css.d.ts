declare namespace InputStyleCssNamespace {
	export interface IInputStyleCss {
		container: string;
		input: string;
		label: string;
		wrapper: string;
	}
}

declare const InputStyleCssModule: InputStyleCssNamespace.IInputStyleCss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: InputStyleCssNamespace.IInputStyleCss;
};

export = InputStyleCssModule;
