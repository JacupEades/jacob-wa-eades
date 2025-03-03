import React from "react";

export function TexturedBG() {
	return (
		<svg
			className="BiblePage-texturedBG"
			width="100%"
			height="100%"
			xmlns="http://www.w3.org/2000/svg">
			<defs>
				{/* Pronounced Grain Texture */}
				<filter id="grainy">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="1"
						numOctaves="1"
						stitchTiles="stitch"
					/>
					<feColorMatrix type="saturate" values="0.3" />
					<feComposite operator="in" in2="SourceGraphic" />
				</filter>
				{/* Radial Gradient for Depth */}
				<radialGradient id="paperGradient" cx="50%" cy="50%" r="85%">
					<stop offset="0%" stopColor="#f8eddc" />
					<stop offset="100%" stopColor="#f3e4c9" />
				</radialGradient>
				{/* Subtle Vignette for Depth */}
				<radialGradient id="vignette" cx="50%" cy="50%" r="90%">
					<stop offset="70%" stopColor="transparent" />
					<stop offset="100%" stopColor="rgba(0,0,0,0.08)" />
				</radialGradient>
			</defs>
			{/* Background */}
			<rect width="100%" height="100%" fill="url(#paperGradient)" />
			{/* Subtle Grain Effect */}
			<rect width="100%" height="100%" filter="url(#grainy)" opacity="0.25" />
			{/* Soft Vignette Effect */}
			<rect width="100%" height="100%" fill="url(#vignette)" />
		</svg>
	);
}
