import type React from "react";
import { NavLink } from "react-router-dom";
import { componentsList } from "../utils/constants";

const Sidebar: React.FC = () => {
    return (
        <div className="w-64 h-full">
            <ul>
                {componentsList.map((component) => (
                    <li key={component.name}>
                        <NavLink
                            to={component.route}
                            className={({ isActive }) => 
                                isActive 
                                    ? "text-white" 
                                    : "text-white/50 hover:text-blue"
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
