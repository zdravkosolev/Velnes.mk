import React from "react";

const DeleteIcon = ({
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
        d="M5.11111 19.7778C5.11111 20.3671 5.34524 20.9324 5.76198 21.3491C6.17873 21.7659 6.74396 22 7.33333 22H16.2222C16.8116 22 17.3768 21.7659 17.7936 21.3491C18.2103 20.9324 18.4444 20.3671 18.4444 19.7778V6.44444H5.11111V19.7778ZM7.33333 8.66667H16.2222V19.7778H7.33333V8.66667ZM15.6667 3.11111L14.5556 2H9L7.88889 3.11111H4V5.33333H19.5556V3.11111H15.6667Z"
        fill={color}
      />
    </svg>
  );
};

export default DeleteIcon;
