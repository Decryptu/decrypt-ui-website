import type React from "react";
import Button from "../ui/Button";

const ButtonShowcase: React.FC = () => {
	return (
		<div className="space-y-4">
			<section id="seo">
				<h2 className="text-2xl font-bold">Rainbow Component</h2>
				<p>
					This is our customizable button component that can be used across the
					application.
				</p>
			</section>

			<section id="visual">
				<h3 className="text-xl font-semibold">Example</h3>
				<Button>Click Me</Button>
			</section>

			<section id="import-use">
				<h3 className="text-xl font-semibold">How to Use</h3>
				<code>import Button from '../ui/Button';</code>
				<p>
					Use the <code>Button</code> component to render a responsive button in your
					application.
				</p>
			</section>

			<section id="source-code">
				<h3 className="text-xl font-semibold">Code</h3>
				<pre>{"<Button>Click Me</Button>"}</pre>
			</section>
		</div>
	);
};

export default ButtonShowcase;
