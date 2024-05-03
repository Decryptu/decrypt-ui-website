import { GitHubLogoIcon } from "@radix-ui/react-icons";
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
		<header className="bg-decrypt-800/50 text-white p-4 fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/25">
			<div className="flex justify-between items-center max-w-screen-xl mx-auto">
				<h1 className="text-lg">
					<Link to="/" className="hover:underline">
						{/* Render the random logo */}
						<img src={randomLogo} alt="Decrypt Logo" className="w-48" />
					</Link>
				</h1>
				{/* GitHub icon with a link */}
				<a
					href="https://github.com/Decryptu/decrypt-ui"
					target="_blank"
					rel="noopener noreferrer"
				>
					<GitHubLogoIcon className="text-white/50 hover:text-white/75 transition w-6 h-6" />
				</a>
			</div>
		</header>
	);
};

export default Header;
