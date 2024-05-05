import type React from "react";
import { NavLink } from "react-router-dom";
import { componentsList } from "../utils/constants";

const Sidebar: React.FC = () => {
	return (
		<div className="w-64 h-full">
			<h3 className="text-left font-normal w-full text-white focus:outline-none">
				Components
			</h3>
			<ul className="font-light my-4">
				{componentsList.map((component) => (
					<li key={component.name}>
						<NavLink
							to={component.route}
							className={({ isActive }) =>
								isActive
									? "text-white py-1 block"
									: "text-white/50 hover:text-blue py-1 block"
							}
						>
							{component.name}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
