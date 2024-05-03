import FallbackSvg from "../assets/images/Fallback";

export type ComponentInfo = {
	name: string;
	description: string;
	route: string;
	svg: React.ComponentType; // This specifies the type for a component.
};

export const componentsList: ComponentInfo[] = [
	{
		name: "Button",
		description: "Clickable button component.",
		route: "/component/button",
		svg: FallbackSvg,
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
