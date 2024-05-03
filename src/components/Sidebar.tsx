import type React from "react";
import { Link } from "react-router-dom";
import { componentsList } from "../utils/constants";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-full bg-gray-100 p-5">
      <ul>
        {componentsList.map((component) => (
          <li key={component.name}>
            <Link to={component.route}>{component.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
