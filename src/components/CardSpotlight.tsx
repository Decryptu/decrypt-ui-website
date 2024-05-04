import type React from "react";
import { useCallback, useRef, useState } from "react";

interface Position {
	x: number;
	y: number;
}

interface CardSpotlightProps {
	children?: React.ReactNode;
}

const CardSpotlight: React.FC<CardSpotlightProps> = ({ children }) => {
	const divRef = useRef<HTMLDivElement>(null);
	const [isFocused, setIsFocused] = useState(false);
	const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
	const [opacity, setOpacity] = useState(0);

	const handleMouseMove = useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			if (!divRef.current || isFocused) return;

			const rect = divRef.current.getBoundingClientRect();
			setPosition({
				x: e.clientX - rect.left,
				y: e.clientY - rect.top,
			});
		},
		[isFocused],
	);

	const handleFocus = useCallback(() => {
		setIsFocused(true);
		setOpacity(1);
	}, []);

	const handleBlur = useCallback(() => {
		setIsFocused(false);
		setOpacity(0);
	}, []);

	const handleMouseEnter = useCallback(() => setOpacity(1), []);
	const handleMouseLeave = useCallback(() => setOpacity(0), []);

	return (
		<div
			ref={divRef}
			onMouseMove={handleMouseMove}
			onFocus={handleFocus}
			onBlur={handleBlur}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className="relative flex items-center justify-center overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-r from-black/25 to-decrypt-800/25 shadow-2xl backdrop-blur-sm"
			style={{ minWidth: "fit-content", minHeight: "fit-content" }}
		>
			<div
				className="pointer-events-none absolute inset-0 opacity-0 transition duration-300"
				style={{
					opacity,
					background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(123, 208, 245, 0.2), transparent 40%)`,
				}}
			/>
			{children}
		</div>
	);
};

export default CardSpotlight;
