import type React from "react";

const Spotlights: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none animate-pulse">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <title>Spotlights</title>
          <style>
            {`.cls-1, .cls-2 {
        opacity: 0.4;
      }

      .cls-3 {
        fill: url(#radial-gradient-2);
        opacity: 0.6;
      }

      .cls-3, .cls-2 {
        isolation: isolate;
        stroke-width: 0px;
      }

      .cls-2 {
        fill: url(#radial-gradient);
      }`}
          </style>
          <radialGradient
            id="radial-gradient"
            cx="-1259.4"
            cy="534.9"
            fx="-1259.4"
            fy="534.9"
            r="1"
            gradientTransform="translate(-494283.9 1346136) rotate(87.2) scale(1047.8 -1047.8)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#7bd0f5" />
            <stop offset="1" stopColor="#000" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="radial-gradient-2"
            cx="-1258.9"
            cy="535.9"
            fx="-1258.9"
            fy="535.9"
            r="1"
            gradientTransform="translate(-284327 669166.7) rotate(90) scale(531.5 -531.5)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#7bd0f5" />
            <stop offset="1" stopColor="#000" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle className="cls-2" cx="1274.8" cy="637.5" r="1033.8" />
        <g className="cls-1">
          <circle className="cls-3" cx="502" cy="45.9" r="575.8" />
        </g>
      </svg>
    </div>
  );
};

export default Spotlights;
