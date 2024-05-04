import type { SVGProps } from "react";

const CryptoTicker = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		data-name="Layer 1"
		viewBox="0 0 343 172"
		{...props}
	>
		<title>Crypto Ticker</title>
		<defs>
			<linearGradient
				id="tick"
				x1={-0.3}
				x2={343.3}
				y1={89}
				y2={87.5}
				gradientTransform="matrix(1 0 0 -1 0 174)"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset={0} stopColor="#202020" />
				<stop offset={1} />
			</linearGradient>
		</defs>
		<rect
			width={343}
			height={171.5}
			rx={13.1}
			ry={13.1}
			style={{
				strokeWidth: 0,
				fill: "url(#tick)",
			}}
		/>
		<rect
			width={128.8}
			height={122.9}
			x={107.1}
			y={24.3}
			rx={7.8}
			ry={7.8}
			style={{
				strokeMiterlimit: 10,
				fill: "#000",
				stroke: "#444",
			}}
		/>
		<rect
			width={28.5}
			height={10}
			x={117.3}
			y={37.9}
			rx={5}
			ry={5}
			style={{
				fill: "#fff",
				strokeWidth: 0,
			}}
		/>
		<rect
			width={72.7}
			height={16.9}
			x={117.3}
			y={54.3}
			rx={8.4}
			ry={8.4}
			style={{
				fill: "#14c784",
				strokeWidth: 0,
			}}
		/>
		<rect
			width={72.7}
			height={7.9}
			x={117.3}
			y={76.1}
			rx={4}
			ry={4}
			style={{
				fill: "gray",
				strokeWidth: 0,
			}}
		/>
		<rect
			width={37.9}
			height={13.4}
			x={190.1}
			y={36.3}
			rx={6.7}
			ry={6.7}
			style={{
				fill: "#232323",
				strokeWidth: 0,
			}}
		/>
		<path
			d="M108 138.7c.1-2 .5-3.9 1.4-4.1.7-.2 1.2.9 1.7.9 2.5-.2 2.6-22.6 4.1-22.7 1.1 0 2.3 12.3 4.1 12.3 1.7 0 2.7-11.1 4.4-11.1 1.1 0 1.4 4.6 2.6 4.6 1.4 0 2.1-7 3.4-7 1.5 0 2.6 9.1 3.2 9 .4 0 0-4.5.9-4.6.6-.1 1 2.2 1.9 2.2 1.7 0 2.6-9.2 3.9-9.2 1.6 0 2.7 13.5 3.7 13.5.6 0 .7-4.5 1.5-4.6.9 0 1.7 5.2 2.6 5.1.8 0 .9-5.4 1.7-5.5.7 0 1.4 4 2.2 3.9.7 0 .6-2.7 1.7-3.1 1-.3 1.8 1.5 2.7 1.4 2-.4 1.6-9.6 2.6-9.7.7 0 1.3 4.8 2.2 4.8 1.2 0 1.9-7.7 2.6-7.7.6 0 .4 6.4 1.2 6.5.5 0 .8-2.8 1.7-2.9 1.5-.1 2.8 7.3 4.4 7.2 1.3 0 1.7-5.1 2.9-5.1.9 0 1.3 2.9 2.2 2.9 1.4 0 1.8-6.2 3.4-6.3 1.5-.1 2.8 5.6 3.9 5.5.9-.2.8-4.2 1.5-4.3.6 0 .9 2.2 1.4 2.2 1.6 0 3.7-24.1 4.8-24 .5 0 .6 5.4 1.5 5.5.6 0 1-2.3 1.5-2.2 1 0 1 7.1 1.9 7.2.6 0 1.2-3.6 1.9-3.6.6 0 .5 2.6 1.2 2.7 1 .2 2-4.8 3.1-4.8 1.7.1 1.9 12.8 3.1 12.8.6 0 1.4-3.4 1.7-4.7.2-.8.1-1.6.3-1.6.4 0 .9 3.1 1.5 3.1 1 0 1.6-6.7 2.2-6.6.6 0 .4 7.8 1.7 8 .8.1 1.4-2.3 2.4-2.2 1.2.1 1.3 4 2.2 4.1 1.3.1 2.3-6.4 3.7-6.3 1.5 0 2.2 7.6 3.4 7.5.8 0 1.1-3.6 1.9-3.6.8 0 1 3.2 1.9 3.2 1.3 0 2.7-7.1 3.4-7 .4 0-.1 2.8 1 3.4.7.4 1.8-.2 2.9-1"
			style={{
				fill: "none",
				stroke: "#14c784",
				strokeMiterlimit: 10,
			}}
		/>
	</svg>
);
export default CryptoTicker;
