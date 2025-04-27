'use client';

import { useState } from 'react';
import './ComponentLibrary.css';
import ComponentSection from './ComponentSection';

const COMPONENT_SECTIONS = [
	'Color',
	'Typography',
	'Buttons',
	'Forms',
	'Layout',
	// Add more sections as needed
];

/**
 * TODO:
 * - Add layout for selecting components
 * - Update the color sections classes and main page classes
 * - Move COMPONENT_SECTIONS and auto gen
 * - Add more sections
 */
export default function ComponentLibrary() {
	const [selection, setSelection] = useState('Color');

	return (
		<div className="ComponentLibrary">
			{/* Aside */}
			<aside className="ComponentLibrary-aside">
				<h1>Section Selection</h1>
				<nav className="ComponentLibrary-nav">
					<ul className="ComponentLibrary-navList">
						{COMPONENT_SECTIONS.map((section) => (
							<li key={section} className="ComponentLibrary-navItem">
								<button
									className={`ComponentLibrary-navButton ${
										selection === section ? 'ComponentLibrary-navButton--active' : ''
									}`}
									onClick={() => setSelection(section)}
									aria-current={selection === section ? 'page' : undefined}>
									{section}
								</button>
							</li>
						))}
					</ul>
				</nav>
			</aside>
			<main className="ComponentLibrary-main">
				<ComponentSection selection={selection} />
			</main>
		</div>
	);
}
