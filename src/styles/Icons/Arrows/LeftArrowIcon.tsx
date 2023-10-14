import React from "react";

const LeftArrowIcon = ({
  color = "black",
  size = 20,
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
        d="M17.5 12C17.5 12 11.1005 12 7 12M7 12C8.95262 10.2426 11.5 8 11.5 8M7 12C8.95262 13.7574 11.5 16 11.5 16"
        stroke={color}
      />
    </svg>
  );
};

export default LeftArrowIcon;
