import type { Metadata } from "next";
import { PageNav, PageFooter } from "@/components";

import "./globals.css";

const navItems = [
	{ label: "Home", href: "/" },
	{ label: "Colors", href: "/colors" },
	{ label: "Bazaar Clone", href: "/bazaar-clone" },
	{ label: "Idle Game", href: "/idle-game" },
];

export const metadata: Metadata = {
	title: "Jacob WA Eades Site",
	description: "Next js, React 19, site for learning and develoment fun.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<PageNav items={navItems} />
				<main>{children}</main>
				<PageFooter />
			</body>
		</html>
	);
}
