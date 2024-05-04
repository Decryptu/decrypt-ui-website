import type React from "react";
import { Link } from "react-router-dom";
import Spotlights from "../assets/images/Spotlights";
import CardSpotlight from "../components/CardSpotlight";
import GridBackground from "../components/GridBackground";
import { componentsList } from "../utils/constants";

const Landing: React.FC = () => {
	return (
		<div className="py-32 px-4 relative max-w-screen-2xl xl:px-8 mx-auto">
			<GridBackground className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]" />
			<Spotlights className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none animate-pulse" />
			<h2 className="text-2xl font-bold">Welcome to Decrypt UI</h2>
			<p className="text-gray-600">
				Explore our high-quality UI components designed for developers.
			</p>
			<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{componentsList.map((component) => {
					const SvgComponent = component.svg; // Dynamically get the SVG component
					return (
						<CardSpotlight key={component.name}>
							<Link to={component.route} className="block p-4 container">
								<div className="flex flex-col items-start">
									<SvgComponent />
									<h3 className="text-xl font-bold mt-2">{component.name}</h3>
									<p className="text-gray-500">{component.description}</p>
								</div>
							</Link>
						</CardSpotlight>
					);
				})}
			</div>
		</div>
	);
};

export default Landing;
