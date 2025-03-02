import type { Metadata } from "next";
import { PageNav, PageFooter } from "@/components";
import "../../public/tokens.css";

import "./globals.css";

const navItems = [
	{ label: "Home", href: "/" },
	{ label: "Component Library", href: "/component-lib" },
	{ label: "Bazaar Clone", href: "/bazaar-clone" },
	{ label: "Bible Page", href: "/bible-page" },
	{ label: "Idle Game", href: "/idle-game" },
	{ label: "Fighting Fantasy", href: "/fighting-fantasy" },
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
