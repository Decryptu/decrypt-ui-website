"use client";

import type React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { componentsList } from "../utils/constants";

const Sidebar: React.FC = () => {
	const pathname = usePathname();

	return (
		<div className="w-64 h-full">
			<h3 className="text-left font-normal w-full text-white focus:outline-none">
				Components
			</h3>
			<ul className="font-light my-4">
				{componentsList.map((component) => {
					const isActive = pathname === component.route;
					return (
						<li key={component.name}>
							<Link
								href={component.route}
								className={
									isActive
										? "text-white py-1 block"
										: "text-white/50 hover:text-blue py-1 block"
								}
							>
								{component.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Sidebar;
