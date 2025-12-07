import React from "react";
import { notFound } from "next/navigation";
import Spotlights from "@/assets/images/Spotlights";
import BurgerMenu from "@/components/BurgerMenu";
import GridBackground from "@/components/GridBackground";
import Sidebar from "@/components/Sidebar";
import TOC from "@/components/TOC";

const showcaseComponents: Record<string, React.ComponentType> = {
	cointicker: React.lazy(
		() => import("@/components/showcases/CointickerShowcase"),
	),
	cryptotofiat: React.lazy(
		() => import("@/components/showcases/CryptotofiatShowcase"),
	),
	newsfeed: React.lazy(
		() => import("@/components/showcases/NewsfeedShowcase"),
	),
};

export default function ComponentPage({
	params,
}: {
	params: { name: string };
}) {
	const componentName = params.name.toLowerCase();
	const ShowcaseComponent = showcaseComponents[componentName];

	if (!ShowcaseComponent) {
		notFound();
	}

	return (
		<div className="flex max-w-screen-2xl xl:px-8 px-4 mx-auto min-h-screen pt-32">
			<GridBackground className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]" />
			<Spotlights className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none animate-pulse" />
			<div className="hidden md:block">
				<div className="sticky top-[120px]">
					<Sidebar />
				</div>
			</div>
			<div className="flex-grow md:px-4 xl:px-8 min-w-0">
				<React.Suspense fallback={<div>Loading...</div>}>
					<ShowcaseComponent />
				</React.Suspense>
			</div>
			<div className="hidden xl:block md:hidden">
				<div className="sticky top-[120px]">
					<TOC />
				</div>
			</div>
			<div className="md:hidden">
				<BurgerMenu />
			</div>
		</div>
	);
}

export async function generateStaticParams() {
	return [
		{ name: "cointicker" },
		{ name: "cryptotofiat" },
		{ name: "newsfeed" },
	];
}
