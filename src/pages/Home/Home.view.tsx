import styles from "./Home.style.css";

import React, { useState } from "react";
import { HomeProps } from "./Home";
import { Stepper } from "@components/Stepper";
import FinancialManangerIcon from "./contents/manager.svg";
import DebtorIcon from "./contents/debtor.svg";
import CourtOfLawIcon from "./contents/manager.svg";
import DocumentsIcon from "./contents/manager.svg";

export const HomeView: React.FC<HomeProps> = props => {
	return (
		<div className={styles.container}>
			<Stepper
				count={4}
				banner={[
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
				]}
			></Stepper>
		</div>
	);
};
