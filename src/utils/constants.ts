import CryptoTicker from "../assets/images/CryptoTicker";
import FallbackSvg from "../assets/images/Fallback";

export type ComponentInfo = {
	name: string;
	description: string;
	route: string;
	svg: React.ComponentType; // This specifies the type for a component.
};

export const componentsList: ComponentInfo[] = [
	{
		name: "Crypto Ticker",
		description: "Display any crypto price, market cap, and chart.",
		route: "/component/ticker",
		svg: CryptoTicker,
	},
	{
		name: "Table",
		description: "Table to display complex data.",
		route: "/component/table",
		svg: FallbackSvg,
	},
	{
		name: "Rainbow",
		description: "Rainbow to display complex data.",
		route: "/component/rainbow",
		svg: FallbackSvg,
	},
];
