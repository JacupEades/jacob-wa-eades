'use client';

import Button from '@/components/Button/Button/Button';
import './ButtonLib.css';

export default function ButtonLib() {
	return (
		<section className="ButtonLib">
			<header className="ButtonLib-header">
				<h1>Button Page</h1>
			</header>
			<article className="ButtonLib-article">
				<Button>Test</Button>
				<Button>Test</Button>
				<Button>Test</Button>
			</article>
		</section>
	);
}
