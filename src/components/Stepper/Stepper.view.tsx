import classNames from "classnames";
import { map, range } from "lodash";
import React, { useState } from "react";

import styles from "./Stepper.style.css";

import CourtOfLawIcon from "./contents/court-of-law.svg";
import DebtorIcon from "./contents/debtor.svg";
import DocumentsIcon from "./contents/document.svg";
import FinancialManangerIcon from "./contents/manager.svg";

import { Banner } from "@components/Banner";
import { Button } from "@components/Button";

import { TStepperProps } from "./Stepper";
import { FinancialManagerForm } from "./childs/FinancialManagerForm";

type TBanner = {
	icon: TSvg;
	title: string;
	description: string;
	color: TColor;
};

export const StepperView: React.FC<TStepperProps> = props => {
	const banners: TBanner[] = [
		{
			icon: FinancialManangerIcon,
			title: "Финансовый управляющий",
			description:
				"Данные финансового управляющего для составления отчета",
			color: "#3498DB",
		},
		{
			icon: DebtorIcon,
			title: "Должник ",
			description: "Данные должника для составления отчета",
			color: "#9B59B6",
		},
		{
			icon: CourtOfLawIcon,
			title: "Cуд",
			description: "Информация о суде для составления отчета",
			color: "#34495E",
		},
		{
			icon: DocumentsIcon,
			title: "Документы",
			description: "Сгенерированные отчеты",
			color: "#E67E22",
		},
	];
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<div className={styles.container}>
			<Banner
				icon={banners[currentIndex].icon}
				title={banners[currentIndex].title}
				description={banners[currentIndex].description}
				color={banners[currentIndex].color}
			>
				<ul className={styles.navigation}>
					{map(range(0, banners.length), (value, index) => (
						<li
							className={classNames(styles.item, {
								[styles.active]: index === currentIndex,
							})}
							key={value}
						/>
					))}
				</ul>
			</Banner>

			<div className={styles.form}>
				<FinancialManagerForm />

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
							currentIndex < banners.length - 1
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
