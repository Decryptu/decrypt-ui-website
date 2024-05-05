import type React from "react";

const scrollTo = (id: string) => {
	const element = document.getElementById(id);
	if (element) {
		const headerOffset = 80;
		const elementPosition = element.getBoundingClientRect().top;
		const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth",
		});
	}
};

const TOC: React.FC = () => {
	return (
		<div className="w-48 h-full px-4">
			<ul>
				<li>
					<h3 className="text-left font-normal w-full text-white focus:outline-none">
						On this page
					</h3>
				</li>
				{["seo", "visual", "installation", "example", "source-code"].map((id) => (
					<li key={id} className="my-4">
						<button
							type="button"
							className="text-left font-light w-full text-decrypt-400 hover:text-blue focus:outline-none"
							onClick={() => scrollTo(id)}
						>
							{id.charAt(0).toUpperCase() + id.slice(1).replace("-", " ")}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TOC;
