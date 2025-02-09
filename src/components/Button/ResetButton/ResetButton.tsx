import * as motion from "motion/react-client";
import classnames from "classnames";

import "./ResetButton.css";

type ResetButtonProps = {
	onClick?: () => void;
	amount?: number;
};

export default function ResetButton({ onClick }: ResetButtonProps) {
	const buttonClasses = classnames("ResetButton");

	return (
		<motion.button
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			onClick={onClick}
			className={buttonClasses}>
			<div className="ResetButton-content">
				<p className="ResetButton-text">Reset</p>
			</div>
			<span className="ResetButton-overlay" />
		</motion.button>
	);
}
