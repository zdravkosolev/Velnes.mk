import React from "react";

const MedicalIcon = ({
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
        d="M20.575 4V3.825H20.4H11.6H11.425V4V11.425H4H3.825V11.6V20.4V20.575H4H11.425V28V28.175H11.6H20.4H20.575V28V20.575H28H28.175V20.4V11.6V11.425H28H20.575V4ZM13.375 13.2V5.775H18.625V13.2V13.375H18.8H26.225V18.625H18.8H18.625V18.8V26.225H13.375V18.8V18.625H13.2H5.775V13.375H13.2H13.375V13.2Z"
        fill={color}
        stroke={color}
      />
    </svg>
  );
};

export default MedicalIcon;
