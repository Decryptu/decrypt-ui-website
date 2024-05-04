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
                  ? "text-white py-2 block"
                  : "text-white/50 hover:text-blue py-2 block"
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
