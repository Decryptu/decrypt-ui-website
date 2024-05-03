import type React from "react";

type ButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	className?: string;
};

const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	type = "button",
	className = "",
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
