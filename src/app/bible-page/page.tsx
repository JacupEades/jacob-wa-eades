import React from "react";

import "./BiblePage.css";

export default function BiblePage() {
	return (
		<div className="BiblePage">
			<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
				<defs>
					{/* <!-- Light Grain Texture --> */}
					<filter id="grainy">
						<feTurbulence
							type="fractalNoise"
							baseFrequency="0.7"
							numOctaves="3"
							stitchTiles="stitch"
						/>
						<feColorMatrix type="saturate" values="0" />
						<feComposite operator="in" in2="SourceGraphic" />
					</filter>
				</defs>
				{/* <!-- Background --> */}
				<rect width="100%" height="100%" fill="#fdfdfd" />
				{/* <!-- Subtle Grain Effect --> */}
				<rect
					width="100%"
					height="100%"
					fill="white"
					filter="url(#grainy)"
					opacity="0.15"
				/>
			</svg>
		</div>
	);
}
