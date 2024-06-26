import * as React from "react"
import { SVGProps } from "react"
const Light = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={24}
    shapeRendering="geometricPrecision"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    width={24}
    style={{
      color: "currentcolor",
      width: 16,
      height: 16,
    }}
    {...props}
  >
    <circle cx={12} cy={12} r={5} />
    <path d="M12 1v2" />
    <path d="M12 21v2" />
    <path d="M4.22 4.22l1.42 1.42" />
    <path d="M18.36 18.36l1.42 1.42" />
    <path d="M1 12h2" />
    <path d="M21 12h2" />
    <path d="M4.22 19.78l1.42-1.42" />
    <path d="M18.36 5.64l1.42-1.42" />
  </svg>
);
export  { Light }

