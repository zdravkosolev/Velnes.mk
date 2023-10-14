import React from "react";

const MessengerIcon = ({ color, size }: { color: string; size: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9998 3C7.07984 3 3.08984 6.729 3.08984 11.332C3.08984 13.948 4.38084 16.284 6.40084 17.811V21L9.44184 19.313C10.2528 19.541 11.1098 19.663 12.0008 19.663C16.9208 19.663 20.9108 15.933 20.9108 11.332C20.9098 6.729 16.9198 3 11.9998 3ZM12.9378 14.172L10.6328 11.778L6.19484 14.232L11.0598 9.069L13.3648 11.464L17.8038 9.009L12.9378 14.172Z"
        fill={color}
      />
    </svg>
  );
};

export default MessengerIcon;
