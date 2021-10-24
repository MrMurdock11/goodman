import React, { useState } from "react";

import styles from "./Home.style.css";

import CourtOfLawIcon from "./contents/court-of-law.svg";
import DebtorIcon from "./contents/debtor.svg";
import DocumentsIcon from "./contents/document.svg";
import FinancialManangerIcon from "./contents/manager.svg";

import { Stepper } from "@components/Stepper";

import { HomeProps } from "./Home";

export const HomeView: React.FC<HomeProps> = props => {
	return (
		<div className={styles.container}>
			<Stepper />
		</div>
	);
};
