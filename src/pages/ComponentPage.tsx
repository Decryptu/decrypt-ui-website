import React from "react";
import { useParams } from "react-router-dom";
import Spotlights from "../assets/images/Spotlights";
import BurgerMenu from "../components/BurgerMenu";
import GridBackground from "../components/GridBackground";
import Sidebar from "../components/Sidebar";
import TOC from "../components/TOC";

const ComponentPage: React.FC = () => {
	const { name = "defaultComponent" } = useParams<{ name?: string }>();
	const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
	const ShowcaseComponent = React.lazy(
		() => import(`../components/showcases/${formattedName}Showcase`),
	);

	return (
		<div className="flex max-w-screen-2xl xl:px-8 px-4 mx-auto min-h-screen pt-24">
			<GridBackground className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]" />
			<Spotlights className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none animate-pulse" />
			<div className="hidden md:block">
				<Sidebar />
			</div>
			<div className="flex-grow md:px-4 xl:px-8">
				<React.Suspense fallback={<div>Loading...</div>}>
					<ShowcaseComponent />
				</React.Suspense>
			</div>
			<div className="hidden md:block">
				<TOC />
			</div>
			<div className="md:hidden">
				<BurgerMenu />
			</div>
		</div>
	);
};

export default ComponentPage;
