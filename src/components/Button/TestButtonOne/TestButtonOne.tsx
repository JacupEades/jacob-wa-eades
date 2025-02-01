"use client";

import React, { useState } from "react";
import "./TestButtonOne.css";

export default function TestButtonOne() {
	const [isLoading, setIsLoading] = useState(false);

	const handleClick = () => {
		if (isLoading) return;
		setIsLoading(true);

		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	};

	return (
		<button
			onClick={handleClick}
			className={`loading-button ${isLoading ? "loading" : ""}`}
			disabled={isLoading}>
			<span className="button-text">Click Me</span>
			<div className="loading-effect"></div>
		</button>
	);
}
