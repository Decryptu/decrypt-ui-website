import type React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-lg">
        <Link to="/" className="hover:underline">
          Decrypt UI
        </Link>
      </h1>
    </header>
  );
};

export default Header;
