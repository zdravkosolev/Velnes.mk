import React from "react";

const CloseIcon = ({
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
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.59099 3.53033L4.06066 3L3 4.06066L3.53033 4.59099L8.86621 9.92687L3.53033 15.2627L3 15.7931L4.06066 16.8537L4.59099 16.3234L9.92687 10.9875L15.2627 16.3234L15.7931 16.8537L16.8537 15.7931L16.3234 15.2627L10.9875 9.92687L16.3234 4.59099L16.8537 4.06066L15.7931 3L15.2627 3.53033L9.92687 8.86621L4.59099 3.53033Z"
        fill={color}
      />
    </svg>
  );
};

export default CloseIcon;
