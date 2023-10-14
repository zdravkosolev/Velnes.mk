import React from "react";

const TransferIcon = ({
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
        d="M15 12L20 8L15 4V6.999H2V8.999H15V12ZM22 15H9V12L4 16L9 20V17H22V15Z"
        fill={color}
      />
    </svg>
  );
};

export default TransferIcon;
