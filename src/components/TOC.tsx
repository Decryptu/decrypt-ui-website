import type React from "react";

const TOC: React.FC = () => {
	return (
		<div className="w-48 h-full">
			<ul>
				<li>
					<a href="#seo">SEO Stuff</a>
				</li>
				<li>
					<a href="#visual">Visual Representation</a>
				</li>
				<li>
					<a href="#import-use">How to Import and Use</a>
				</li>
				<li>
					<a href="#source-code">Source Code</a>
				</li>
			</ul>
		</div>
	);
};

export default TOC;
