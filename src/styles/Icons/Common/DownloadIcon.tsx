import React from "react";

const DownloadIcon = ({
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
      <path d="M12 16L16 11H13V4H11V11H8L12 16Z" fill={color} />
      <path
        d="M20 18H4V11H2V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V11H20V18Z"
        fill={color}
      />
    </svg>
  );
};

export default DownloadIcon;
