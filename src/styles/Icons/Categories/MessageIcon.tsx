import React from "react";

const MessageIcon = ({
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
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.1797 10.0812C10.1797 9.71892 10.3236 9.37152 10.5797 9.11537C10.8359 8.85923 11.1833 8.71533 11.5455 8.71533H29.3013C29.6635 8.71533 30.0109 8.85923 30.2671 9.11537C30.5232 9.37152 30.6671 9.71892 30.6671 10.0812V14.1786H10.1797V10.0812Z"
        stroke={color}
      />
      <path
        d="M18.3731 14.1786L10.1781 23.7394M22.4705 14.1786L30.6655 23.7394M27.2509 19.6419H13.5927M4.71476 7.34942V14.1786H10.1781V25.7881M30.6655 14.1786V25.7881M6.7635 8.03233L2.66602 6.6665"
        stroke={color}
      />
    </svg>
  );
};

export default MessageIcon;
