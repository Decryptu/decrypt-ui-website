import CryptoTicker from "../assets/images/CryptoTicker";
import FallbackSvg from "../assets/images/Fallback";

export type ComponentInfo = {
	name: string;
	description: string;
	route: string;
	svg: React.ComponentType;
};

export const componentsList: ComponentInfo[] = [
	{
		name: "Coin Ticker",
		description: "Display any crypto price, market cap, and chart.",
		route: "/component/cointicker",
		svg: CryptoTicker,
	},
	{
		name: "[WIP] Crypto to Fiat",
		description: "Convert any crypto to fiat.",
		route: "/component/cryptotofiat",
		svg: FallbackSvg,
	},
	{
		name: "[WIP] News Feed",
		description: "Get the latest crypto news from multiple sources.",
		route: "/component/newsfeed",
		svg: FallbackSvg,
	},
];
