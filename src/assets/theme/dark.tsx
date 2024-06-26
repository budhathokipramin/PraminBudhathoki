import * as React from "react"
import { SVGProps } from "react"
const Dark = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
)
export { Dark }

