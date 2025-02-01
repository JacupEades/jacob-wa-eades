"use client";
import React, { useEffect, useState } from "react";
import classnames from "classnames";

import "./PageNav.css";
import { usePathname } from "next/navigation";

type NavItem = {
	label: string;
	href: string;
};

type PageNavProps = {
	items: NavItem[];
};

export default function PageNav({ items }: PageNavProps) {
	const [isAtTop, setIsAtTop] = useState(false);

	const navClasses = classnames("PageNav", isAtTop && "PageNav--isAtTop");

	useEffect(() => {
		const handleScroll = () => {
			setIsAtTop(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const currentPath = usePathname();

	return (
		<nav className={navClasses} aria-label="Main Navigation">
			<ul className="PageNav-list">
				{items.map((item) => (
					<li
						key={item.href}
						className={classnames(
							"PageNav-item",
							currentPath === item.href && "PageNav-item--isActive"
						)}>
						<a href={item.href} className="PageNav-link">
							{item.label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
