'use client';

import ColorLib from './sections/Color/ColorLib';

interface ComponentSectionProps {
	selection: string;
}

export default function ComponentSection({ selection }: ComponentSectionProps) {
	const renderSection = () => {
		switch (selection) {
			case 'Color':
				return <ColorLib />;
			// Add more cases for other sections
			default:
				return <div>Please select a component</div>;
		}
	};

	return <div className="ComponentSection">{renderSection()}</div>;
}
