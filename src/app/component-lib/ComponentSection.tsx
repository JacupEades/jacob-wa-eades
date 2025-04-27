'use client';

import ColorLib from './sections/Color/ColorLib';
// import TypographyLib from './sections/Typography/TypographyLib';
import ButtonLib from './sections/Button/ButtonLib';

type SectionKey = keyof typeof SECTION_COMPONENT_MAP;

interface ComponentSectionProps {
	selection: SectionKey;
}

// Explicit map connecting selection strings to components
const SECTION_COMPONENT_MAP = {
	Color: ColorLib,
	// Typography: TypographyLib,
	Button: ButtonLib,
} as const;

export default function ComponentSection({ selection }: ComponentSectionProps) {
	const SelectedComponent = SECTION_COMPONENT_MAP[selection];

	return (
		<div className="ComponentSection">
			{SelectedComponent ? <SelectedComponent /> : <div>Please select a component</div>}
		</div>
	);
}
