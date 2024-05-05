import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import type React from "react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// Create a custom theme based on vscDarkPlus
const customStyle = {
	...vscDarkPlus,
	'pre[class*="language-"]': {
		...vscDarkPlus['pre[class*="language-"]'],
		background: "rgba(0, 0, 0, 0.5)",
		backdropFilter: "blur(10px)",
		fontFamily: "inherit",
		borderRadius: "0.5rem",
		border: "solid 1px rgba(255, 255, 255, 0.25)",
	},
};
interface CopyableCodeProps {
	code: string;
	language?: string;
}

const CopyableCode: React.FC<CopyableCodeProps> = ({
	code,
	language = "typescript",
}) => {
	const [isCopied, setIsCopied] = useState(false);

	const handleCopy = async () => {
		await navigator.clipboard.writeText(code);
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 2000);
	};

	return (
		<div className="relative">
			<SyntaxHighlighter language={language} style={customStyle}>
				{code}
			</SyntaxHighlighter>
			<button
				onClick={handleCopy}
				type="button"
				className="absolute top-3 right-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
				title="Copy to clipboard"
			>
				{isCopied ? (
					<CheckIcon className="w-4 h-4" />
				) : (
					<CopyIcon className="w-4 h-4" />
				)}
			</button>
		</div>
	);
};

export default CopyableCode;
