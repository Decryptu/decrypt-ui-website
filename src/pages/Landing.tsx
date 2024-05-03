import type React from "react";
import { Link } from "react-router-dom";
import { componentsList } from "../utils/constants";

const Landing: React.FC = () => {
	return (
		<div className="p-8">
			<h2 className="text-2xl font-bold">Welcome to Decrypt UI</h2>
			<p className="text-gray-600">
				Explore our high-quality UI components designed for developers.
			</p>
			<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{componentsList.map((component) => (
					<Link
						to={component.route}
						key={component.name}
						className="block p-4 border border-gray-200 shadow hover:shadow-md rounded-lg"
					>
						<h3 className="text-xl font-bold">{component.name}</h3>
						<p className="text-gray-500">{component.description}</p>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Landing;
