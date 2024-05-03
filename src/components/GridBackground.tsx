import type React from "react";

const GridBackground: React.FC = () => {
	return (
		<div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]">
			<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<title>Grid</title>
					<pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
						<path
							d="M 40 0 L 0 0 0 40"
							fill="none"
							stroke="rgba(255, 255, 255, 0.2)"
							strokeWidth="1"
						/>
					</pattern>
					<linearGradient id="fade" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" stopColor="white" stopOpacity="0" />
						<stop offset="50%" stopColor="white" stopOpacity="1" />
						<stop offset="100%" stopColor="white" stopOpacity="0" />
					</linearGradient>
					<mask id="gridMask">
						<rect width="100%" height="100%" fill="url(#fade)" />
					</mask>
				</defs>
				<rect width="100%" height="100%" fill="url(#grid)" mask="url(#gridMask)" />
			</svg>
		</div>
	);
};

export default GridBackground;
