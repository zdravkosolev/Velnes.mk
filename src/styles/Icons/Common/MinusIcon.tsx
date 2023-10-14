import React from "react";

const MinusIcon = ({
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
      <path d="M5 11H19V13H5V11Z" fill={color} />
    </svg>
  );
};

export default MinusIcon;
