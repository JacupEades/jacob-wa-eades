'use client';
import React, { useState } from 'react';

import './BiblePage.css';
import { TexturedBG } from './helpers';
import InputField from '@/components/Input/InputField/InputField';

export default function BiblePage() {
	const [searchValue, setSearchValue] = useState('');
	return (
		<div className="BiblePage">
			<TexturedBG />
			{/* Main Content Body */}
			<main className="BiblePage-main">
				<h3>Need some help, wisdom can be found here</h3>
				<h1>What would you like to ask God?</h1>
				<InputField value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
			</main>
		</div>
	);
}
