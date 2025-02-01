import "./PageFooter.css";

export default function PageFooter() {
	return (
		<footer className="PageFooter">
			<p>
				© {new Date().getFullYear()} Jacob WA Eades. All rights reserved. 😝
			</p>
		</footer>
	);
}
