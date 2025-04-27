'use client';

import { useEffect, useState } from 'react';
import './ColorLib.css';

export default function ColorLib() {
	const [colorTokens, setColorTokens] = useState<{ name: string; value: string }[]>([]);

	useEffect(() => {
		const colorVars: { name: string; value: string }[] = [];
		const rootStyle = getComputedStyle(document.documentElement);

		// Loop through all loaded stylesheets
		for (const sheet of document.styleSheets) {
			try {
				if (!sheet.cssRules) continue;

				for (const rule of sheet.cssRules) {
					if (rule instanceof CSSStyleRule && rule.selectorText === ':root') {
						// Extract all variables from `:root`
						for (const style of rule.style) {
							if (style.startsWith('--color-')) {
								const value = rootStyle.getPropertyValue(style).trim();
								if (value) {
									colorVars.push({ name: style, value });
								}
							}
						}
					}
				}
			} catch (e) {
				console.warn('Skipping inaccessible stylesheet', e);
			}
		}

		setColorTokens(colorVars);
	}, []);

	return (
		<section className="ColorLib">
			<header className="ColorLib-header">
				<h1>Color Page</h1>
			</header>
			<article className="color-grid">
				{colorTokens.map(({ name, value }) => (
					<div className="color-box" key={name}>
						<div className="color-preview" style={{ backgroundColor: value }} />
						<div className="color-info">
							<p className="color-name">{name}</p>
							<p className="color-value">{value}</p>
						</div>
					</div>
				))}
			</article>
		</section>
	);
}
