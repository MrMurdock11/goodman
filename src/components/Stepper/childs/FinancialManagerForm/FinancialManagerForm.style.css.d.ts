declare namespace FinancialManagerFormStyleCssNamespace {
	export interface IFinancialManagerFormStyleCss {
		container: string;
	}
}

declare const FinancialManagerFormStyleCssModule: FinancialManagerFormStyleCssNamespace.IFinancialManagerFormStyleCss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: FinancialManagerFormStyleCssNamespace.IFinancialManagerFormStyleCss;
};

export = FinancialManagerFormStyleCssModule;
