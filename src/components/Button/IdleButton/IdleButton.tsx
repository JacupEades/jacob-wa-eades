"use client";

import React, { useState } from "react";
import * as motion from "motion/react-client";
import classnames from "classnames";

import "./IdleButton.css";

type TestButtonOneProps = {
	onClick?: () => void;
	amount?: number;
};

export default function IdleButton({ onClick, amount }: TestButtonOneProps) {
	const [isLoading, setIsLoading] = useState(false);

	const buttonClasses = classnames(
		"IdleButton",
		isLoading && "IdleButton--isLoading"
	);

	const loadverlayDuration = 200;

	const handleClick = () => {
		if (isLoading) return;

		setIsLoading(true);

		setTimeout(() => {
			setIsLoading(false);
			if (onClick) onClick();
		}, loadverlayDuration);
	};

	const motionHover = isLoading ? 1 : 1.05;
	const motionTap = isLoading ? 1 : 0.95;

	return (
		<motion.button
			whileHover={{ scale: motionHover }} // Slightly grow on hover
			whileTap={{ scale: motionTap }} // Shrink slightly on tap
			onClick={handleClick}
			className={buttonClasses}
			disabled={isLoading}>
			<div className="IdleButton-content">
				<p className="IdleButton-text">Increase By {amount}</p>
			</div>
			<span className="IdleButton-overlay" />
			<span
				className="IdleButton-loadverlay"
				style={{ transition: `width ${loadverlayDuration}ms linear` }}
			/>
		</motion.button>
	);
}
