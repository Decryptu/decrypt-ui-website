import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { componentsList } from "../utils/constants";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="fixed bottom-10 right-10 bg-blue-500 text-white p-3 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>
      {isOpen && (
        <div className="fixed inset-x-0 bottom-20 p-5 bg-white shadow-lg rounded-lg border">
          <ul className="space-y-2">
            {componentsList.map((component) => (
              <li key={component.name}>
                <Link
                  to={component.route}
                  className="block text-center"
                  onClick={() => setIsOpen(false)}
                >
                  {component.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
