import cx from 'classnames';

import './InputField.css';

interface InputFieldProps {
	// Ref
	ref?: React.Ref<HTMLInputElement>;
	// Identifiers
	name?: string;
	id?: string;
	// Input Attributes
	type?: string;
	inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
	placeholder?: string;
	pattern?: string;
	autoComplete?: string;
	multiple?: boolean;
	accept?: string;
	maxLength?: number;
	tabIndex?: number;
	// Value & State
	value?: string | number;
	isReadOnly?: boolean;
	isDisabled?: boolean;
	isRequired?: boolean;
	// Event Handlers
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onClick?: React.MouseEventHandler<HTMLInputElement>;
	onMouseDown?: React.MouseEventHandler<HTMLInputElement>;
	onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
	// Accessibility
	ariaDescribedBy?: string;
	ariaLabel?: string;
	// Styling
	className?: string;
}

export default function InputField({
	// Ref
	ref,
	// Identifiers
	name,
	id,
	// Input Attributes
	type,
	inputMode,
	placeholder,
	pattern,
	autoComplete,
	multiple,
	accept,
	maxLength,
	tabIndex,
	// Value & State
	value,
	isReadOnly,
	isDisabled,
	isRequired,
	// Event Handlers
	onChange,
	onClick,
	onMouseDown,
	onKeyDown,
	// Accessibility
	ariaDescribedBy,
	ariaLabel,
	// Styling
	className,
}: InputFieldProps) {
	const inputClasses = cx('InputField', className);

	return (
		<input
			ref={ref}
			name={name}
			id={id}
			type={type}
			inputMode={inputMode}
			pattern={pattern}
			placeholder={placeholder}
			autoComplete={autoComplete}
			multiple={multiple}
			accept={accept}
			maxLength={maxLength}
			tabIndex={isDisabled ? -1 : tabIndex}
			value={value}
			readOnly={isReadOnly}
			disabled={isDisabled}
			required={isRequired}
			onChange={onChange}
			onClick={onClick}
			onMouseDown={onMouseDown}
			onKeyDown={onKeyDown}
			aria-describedby={ariaDescribedBy}
			aria-label={ariaLabel || name}
			className={inputClasses}
		/>
	);
}
