'use client';
import { useState } from 'react';
import './ComponentLibrary.css';
import ComponentSection from './ComponentSection';
import Button from '@/components/Button/Button/Button';
import cx from 'classnames';
import { COMPONENT_LIB_SECTIONS } from '../utilities/constants';

type ComponentSectionType = (typeof COMPONENT_LIB_SECTIONS)[number];

/**
 * TODO:
 * - Add layout for selecting components
 * - Update the color sections classes and main page classes
 * - Move COMPONENT_SECTIONS and auto gen
 * - Add more sections
 * - Move the aside?
 */
export default function ComponentLibrary() {
	const [selection, setSelection] = useState<ComponentSectionType>('Color');

	const buttonClasses = (section: ComponentSectionType) =>
		cx(
			'ComponentLibrary-navButton',
			selection === section && 'ComponentLibrary-navButton--isActive'
		);

	return (
		<div className="ComponentLibrary">
			{/* Aside */}
			<aside className="ComponentLibrary-aside">
				<h1>Section Selection</h1>
				<nav className="ComponentLibrary-nav">
					<ul className="ComponentLibrary-navList">
						{COMPONENT_LIB_SECTIONS.map((section) => (
							<li key={section} className="ComponentLibrary-navItem">
								<Button
									className={buttonClasses(section)}
									onClick={() => setSelection(section)}
									aria-current={selection === section ? 'page' : undefined}>
									{section}
								</Button>
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
