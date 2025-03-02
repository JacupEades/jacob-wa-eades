"use client";

import { useEffect, useState } from "react";
import "./ComponentLibrary.css";

/**
 * TODO:
 * - Add layout for selecting components
 * - Update the color sections classes and main page classes
 *
 */
export default function ComponentLibrary() {
	const [colorTokens, setColorTokens] = useState<
		{ name: string; value: string }[]
	>([]);

	useEffect(() => {
		const colorVars: { name: string; value: string }[] = [];
		const rootStyle = getComputedStyle(document.documentElement);

		// Loop through all loaded stylesheets
		for (const sheet of document.styleSheets) {
			try {
				if (!sheet.cssRules) continue;

				for (const rule of sheet.cssRules) {
					if (rule instanceof CSSStyleRule && rule.selectorText === ":root") {
						// Extract all variables from `:root`
						for (const style of rule.style) {
							if (style.startsWith("--color-")) {
								const value = rootStyle.getPropertyValue(style).trim();
								if (value) {
									colorVars.push({ name: style, value });
								}
							}
						}
					}
				}
			} catch (e) {
				console.warn("Skipping inaccessible stylesheet", e);
			}
		}

		setColorTokens(colorVars);
	}, []);

	return (
		<div className="ComponentLibrary">
			<main className="ComponentLibrary-main">
				<header className="ComponentLibrary-header">
					<h1 className="ComponentLibrary-headerHead">Color Page</h1>
				</header>
				<section className="color-grid">
					{colorTokens.map(({ name, value }) => (
						<div className="color-box" key={name}>
							<div
								className="color-preview"
								style={{ backgroundColor: value }}
							/>
							<div className="color-info">
								<p className="color-name">{name}</p>
								<p className="color-value">{value}</p>
							</div>
						</div>
					))}
				</section>
			</main>
		</div>
	);
}
