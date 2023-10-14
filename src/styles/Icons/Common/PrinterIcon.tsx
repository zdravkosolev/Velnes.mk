import React from "react";

const PrinterIcon = ({
  color = "black",
  size = 24,
}: {
  color?: string;
  size?: number;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 7H18V2H6V7H5C3.346 7 2 8.346 2 10V17C2 18.103 2.897 19 4 19H6V22H18V19H20C21.103 19 22 18.103 22 17V10C22 8.346 20.654 7 19 7ZM8 4H16V7H8V4ZM16 20H8V16H16V20ZM20 17H18V14H6V17H4V10C4 9.449 4.449 9 5 9H19C19.552 9 20 9.449 20 10V17Z"
        fill={color}
      />
      <path d="M14 10H18V12H14V10Z" fill={color} />
    </svg>
  );
};

export default PrinterIcon;
