import React from "react";
import { useParams } from "react-router-dom";
import BurgerMenu from "../components/BurgerMenu";
import Sidebar from "../components/Sidebar";
import TOC from "../components/TOC";

const ComponentPage: React.FC = () => {
	const { name = "defaultComponent" } = useParams<{ name?: string }>();
	const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
	const ShowcaseComponent = React.lazy(
		() => import(`../components/showcases/${formattedName}Showcase`),
	);

	return (
		<div className="flex py-32 max-w-screen-xl mx-auto">
			<div className="hidden md:block bg-decrypt-700">
				<Sidebar />
			</div>
			<div className="flex-grow p-8">
				<React.Suspense fallback={<div>Loading...</div>}>
					<ShowcaseComponent />
				</React.Suspense>
			</div>
			<div className="hidden md:block bg-decrypt-700">
				<TOC />
			</div>
			<div className="md:hidden">
				<BurgerMenu />
			</div>
		</div>
	);
};

export default ComponentPage;
