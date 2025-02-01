import "./ColorsPage.css";

import { COLOR_VARIABLES } from "../utilities/constants";

export default function ColorsPage() {
	// Render the colors as blocks
	const renderColors = (colors: Record<string, string>) => {
		if (Object.keys(colors).length === 0) {
			return <p>No colors found.</p>;
		}

		return Object.entries(colors).map(([key, value]) => (
			<div
				key={key}
				className="ColorsPage-colorBlock"
				style={{ backgroundColor: value }}>
				<p>{key}</p>
				<p>{value}</p>
			</div>
		));
	};

	return (
		<div className="ColorsPage">
			<header className="ColorsPage-header">
				<h1 className="ColorsPage-headerHead">Colors Page</h1>
				<h2 className="ColorsPage-headerSub">
					Work in progress color vars. TODO: Automate const list, more and
					better vars.
				</h2>
			</header>
			<main className="ColorsPage-main">
				<section
					className="ColorsPage-section"
					aria-labelledby="light-theme-heading">
					<h2 id="light-theme-heading">Light Theme</h2>
					<ul className="ColorsPage-colors">
						{renderColors(COLOR_VARIABLES.LIGHT)}
					</ul>
				</section>
				<section
					className="ColorsPage-section"
					aria-labelledby="dark-theme-heading">
					<h2 id="dark-theme-heading">Dark Theme</h2>
					<ul className="ColorsPage-colors">
						{renderColors(COLOR_VARIABLES.DARK)}
					</ul>
				</section>
			</main>
		</div>
	);
}
