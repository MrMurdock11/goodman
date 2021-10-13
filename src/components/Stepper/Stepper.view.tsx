import styles from "./Stepper.style.css";

import React, { useState } from "react";
import { TStepperProps } from "./Stepper";
import { Button } from "@components/Button";
import { map, range, repeat } from "lodash";
import classNames from "classnames";

export const StepperView: React.FC<TStepperProps> = props => {
	const { count, banner, children } = props;
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<div className={styles.container}>
			<div
				className={styles.banner}
				style={{ backgroundColor: banner[currentIndex].color }}
			>
				<div className={styles.wrapper}>
					<div className={styles.imageWrapper}>
						<img
							src={banner[currentIndex].icon}
							className={styles.image}
						/>
					</div>
					<div className={styles.title}>
						{banner[currentIndex].title}
					</div>
					<div className={styles.description}>
						{banner[currentIndex].description}
					</div>
				</div>

				<ul className={styles.navigation}>
					{map(range(0, count), (value, index) => (
						<li
							className={classNames(styles.item, {
								[styles.active]: index === currentIndex,
							})}
							key={value}
						/>
					))}
				</ul>
			</div>
			<div className={styles.form}>
				<div className={styles.controls}>
					<Button
						onClick={
							currentIndex > 0
								? () => setCurrentIndex(currentIndex - 1)
								: null
						}
					>
						{"Назад"}
					</Button>
					<Button
						onClick={
							currentIndex < count - 1
								? () => setCurrentIndex(currentIndex + 1)
								: null
						}
					>
						{"Далее"}
					</Button>
				</div>
			</div>
		</div>
	);
};
