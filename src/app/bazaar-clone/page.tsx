"use client";

import dynamic from "next/dynamic";

const BazaarClonePage = dynamic(() => import("./BazaarClonePage"), {
	ssr: false,
});

export default function Page() {
	return <BazaarClonePage />;
}
