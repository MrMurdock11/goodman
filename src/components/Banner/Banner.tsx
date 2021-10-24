import React from "react";

import { BannerView } from "./Banner.view";

export type BannerProps = {
	icon: string;
	title: string;
	description: string;
	color: string;
};

export const Banner: React.FC<BannerProps> = props => {
	return <BannerView {...props} />;
};
