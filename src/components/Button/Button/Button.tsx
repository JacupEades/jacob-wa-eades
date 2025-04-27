import React from 'react';
import cx from 'classnames';

import './Button.css';

interface ButtonProps {
	// Ref
	ref?: React.Ref<HTMLButtonElement>;
	// Button Attributes
	type?: 'button' | 'submit' | 'reset';
	size?: 'small' | 'medium' | 'large';
	// State
	isDisabled?: boolean;
	isLoading?: boolean;
	// Events
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	// Content
	children: React.ReactNode;
	// Styling
	className?: string;
}

export default function Button({
	// Ref
	ref,
	// Button Attributes
	type = 'button',
	size = 'medium',
	// State
	isDisabled = false,
	isLoading = false,
	// Events
	onClick,
	// Content
	children,
	// Styling
	className,
}: ButtonProps) {
	const buttonClasses = cx(
		'Button',
		`Button--${size}`,
		isLoading && 'Button--isLoading',
		isDisabled && 'Button--isDisabled',
		className
	);

	return (
		<button
			ref={ref}
			type={type}
			tabIndex={isLoading || isDisabled ? -1 : 0}
			onClick={onClick}
			disabled={isDisabled}
			className={buttonClasses}>
			{children}
		</button>
	);
}
