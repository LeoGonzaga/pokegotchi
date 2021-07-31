import * as React from "react";

export default function BackgroundSVG({ color }) {
  return (
    <svg
      width="306"
      height="274"
      viewBox="0 0 306 274"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M219.487 0.679069C160.8 -8.9699 166.784 87.6161 88.6967 74.3964C8.82687 60.8748 -15.0447 156.261 8.82687 208.949C34.6096 265.855 199.702 296.447 258.765 254.497C325.24 207.283 329.599 18.7832 219.487 0.679069Z"
        fill={color}
      />
    </svg>
  );
}
