declare namespace ButtonStyleCssNamespace {
	export interface IButtonStyleCss {
		button: string;
	}
}

declare const ButtonStyleCssModule: ButtonStyleCssNamespace.IButtonStyleCss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: ButtonStyleCssNamespace.IButtonStyleCss;
};

export = ButtonStyleCssModule;
