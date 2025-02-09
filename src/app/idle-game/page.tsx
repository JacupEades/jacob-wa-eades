"use client";

import React, { useEffect, useState } from "react";
import { ResetButton, IdleButton } from "@/components";

import "./IdleGamePage.css";

const incrementAmountTierOne = 100;

export default function IdleGamePage() {
	const [score, setScore] = useState<number>(0);

	// Load the score from localStorage when the component mounts
	useEffect(() => {
		const storedScore = localStorage.getItem("idleGameScore");
		if (storedScore) {
			const storedValue = Number(storedScore);
			setScore(storedValue);
		}
	}, []);

	// TODO: @Jacob, Should only do when you hit save or every 5 mins, add setting later...
	// Save the score to localStorage whenever it changes
	useEffect(() => {
		localStorage.setItem("idleGameScore", score.toString());
	}, []);

	// Increment the score with animation
	const increaseScore = (amount: number) =>
		setScore((prevScore) => prevScore + amount);

	const resetScore = () => {
		localStorage.setItem("idleGameScore", "0");
		setScore(0);
	};

	return (
		<div className="IdleGamePage">
			<header className="IdleGamePage-header">
				<h1 className="IdleGamePage-headerHead">Idle Game Page</h1>
			</header>
			<main className="IdleGamePage-main">
				<section className="IdleGamePage-section">
					<h1>Game Section</h1>
					{/* Animated Score Display */}
					<div>{score}</div>
					<div className="IdleGamePage-buttons">
						<IdleButton
							onClick={() => increaseScore(incrementAmountTierOne)}
							amount={incrementAmountTierOne}
						/>
						<ResetButton onClick={resetScore} />
					</div>
				</section>
				{/* Asides */}
				<aside className="IdleGamePage-asideLeft">
					<p>Aside Left</p>
				</aside>
				<aside className="IdleGamePage-asideRight">
					<p>Aside Right</p>
				</aside>
			</main>
		</div>
	);
}
