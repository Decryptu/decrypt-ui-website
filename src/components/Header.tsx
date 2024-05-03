import type React from "react";
import { Link } from "react-router-dom";

// Import SVG files
import logoCool from "../assets/images/logo-cool.svg";
import logoFot from "../assets/images/logo-fot.svg";
import logoGeist from "../assets/images/logo-geist.svg";

const Header: React.FC = () => {
  // Function to select a random logo
  const getRandomLogo = () => {
    const logos = [logoCool, logoFot, logoGeist];
    const randomIndex = Math.floor(Math.random() * logos.length);
    return logos[randomIndex];
  };

  // Store the random logo in a variable
  const randomLogo = getRandomLogo();

  return (
    <header className="bg-decrypt-800 text-white p-4">
      <h1 className="text-lg">
        <Link to="/" className="hover:underline">
          {/* Render the random logo */}
          <img src={randomLogo} alt="Decrypt Logo" className="w-48"/>
        </Link>
      </h1>
    </header>
  );
};

export default Header;
