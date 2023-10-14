import React from "react";

const FilterIcon = ({
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
        d="M7 11H17V13H7V11ZM4 7H20V9H4V7ZM10 15H14V17H10V15Z"
        fill={color}
      />
    </svg>
  );
};

export default FilterIcon;
