import React from "react";

import styles from "./Banner.style.css";

import { BannerProps } from "./Banner";

export const BannerView: React.FC<BannerProps> = props => {
	const { icon, title, description, color, children } = props;

	return (
		<div className={styles.container} style={{ backgroundColor: color }}>
			<div className={styles.wrapper}>
				<div className={styles.imageWrapper}>
					<img src={icon} className={styles.image} />
				</div>
				<div className={styles.title}>{title}</div>
				<div className={styles.description}>{description}</div>
			</div>

			{children}
		</div>
	);
};
