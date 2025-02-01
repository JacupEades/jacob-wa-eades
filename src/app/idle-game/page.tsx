import "./IdleGamePage.css";

import { TestButtonOne } from "@/components";

export default function IdleGamePage() {
	// Render the colors as blocks
	const renderColors = (colors: Record<string, string>) => {
		if (Object.keys(colors).length === 0) {
			return <p>No colors found.</p>;
		}

		return Object.entries(colors).map(([key, value]) => (
			<div
				key={key}
				className="IdleGamePage-colorBlock"
				style={{ backgroundColor: value }}>
				<p>{key}</p>
				<p>{value}</p>
			</div>
		));
	};

	return (
		<div className="IdleGamePage">
			<header className="IdleGamePage-header">
				<h1 className="IdleGamePage-headerHead">Idle Game Page</h1>
				<h2 className="IdleGamePage-headerSub">
					Exploring to see if making an Idle Game is fun, and how difficult it
					is to make in react 19.
				</h2>
			</header>
			<main className="IdleGamePage-main">
				<section className="IdleGamePage-section">
					<h1>Game section</h1>
					<TestButtonOne />
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
