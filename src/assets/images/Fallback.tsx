import type { SVGProps } from "react";

const Fallback = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 314 157" // Adjusted to match original width and height
		fill="none"
		className="w-full h-auto" // Ensuring it takes full width and automatic height
		{...props} // Spread any additional props passed to the component
	>
		<title>Fallback</title>
		<rect width={314} height={157} fill='url("#a")' rx={12} />
		<g filter="url(#b)">
			<rect width={152} height={91} x={81} y={33} fill="#000" stroke="#333" rx={8} />
		</g>
		<rect width={40} height={16} x={93} y={96} fill="#BFDBFE" rx={4} />
		<path
			stroke="#4B5563"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={3}
			d="M95 49h60"
		/>
		<path
			stroke="#D1D5DB"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={3}
			d="M95 64h114M95 84h114M95 74h121"
		/>
		<defs>
			<linearGradient
				id="a"
				x1={0}
				x2={314.69}
				y1={0}
				y2={1.396}
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#202020" />
				<stop offset={1} stopColor="#000000" />
			</linearGradient>
			<filter
				id="b"
				width={182}
				height={121}
				x={66}
				y={26}
				colorInterpolationFilters="sRGB"
				filterUnits="userSpaceOnUse"
			>
				<feFlood floodOpacity={0} result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				/>
				<feOffset dy={3} />
				<feGaussianBlur stdDeviation={3} />
				<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
				<feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
				<feColorMatrix
					in="SourceAlpha"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				/>
				<feOffset dy={8} />
				<feGaussianBlur stdDeviation={7.5} />
				<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
				<feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
				<feBlend in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
			</filter>
		</defs>
	</svg>
);
export default Fallback;
