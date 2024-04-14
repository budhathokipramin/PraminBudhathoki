import * as React from "react"
import { SVGProps } from "react"
const System = (props: SVGProps<SVGSVGElement>) => (
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
    <rect x={2} y={3} width={20} height={14} rx={2} ry={2} />
    <path d="M8 21h8" />
    <path d="M12 17v4" />
  </svg>
)
export { System }

