import type { SVGProps } from "react";

const Spotlights = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1215 951.9" {...props}>
    <title>Spotlights</title>
    <defs>
      <radialGradient
        id="spotlightGradientA"
        cx={-1259.4}
        cy={534.9}
        fx={-1259.4}
        fy={534.9}
        r={1}
        gradientTransform="scale(1047.8 -1047.8) rotate(-87.2 -910.415 -394.678)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#7bd0f580" />
        <stop offset={1} stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="spotlightGradientB"
        cx={-1258.9}
        cy={535.9}
        fx={-1258.9}
        fy={535.9}
        r={1}
        gradientTransform="matrix(0 531.5 531.5 0 -284327 669166.7)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#7bd0f580" />
        <stop offset={1} stopOpacity={0} />
      </radialGradient>
    </defs>
    <circle
      cx={1274.8}
      cy={637.5}
      r={1033.8}
      fill="url(#spotlightGradientA)"
      style={{ isolation: "isolate", strokeWidth: 0, opacity: 0.4 }}
    />
    <g style={{ opacity: 0.4 }}>
      <circle
        cx={502}
        cy={45.9}
        r={575.8}
        fill="url(#spotlightGradientB)"
        style={{ isolation: "isolate", strokeWidth: 0, opacity: 0.6 }}
      />
    </g>
  </svg>
);

export default Spotlights;
