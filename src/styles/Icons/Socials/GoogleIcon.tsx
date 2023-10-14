import React from "react";

const GoogleIcon = ({ color, size }: { color: string; size: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.2825 10.3559H11.9555V13.8069H16.7475C16.3015 15.9999 14.4345 17.2599 11.9555 17.2599C11.2619 17.2611 10.5748 17.1253 9.93371 16.8604C9.29263 16.5955 8.71016 16.2066 8.21971 15.716C7.72926 15.2255 7.34048 14.6429 7.07566 14.0018C6.81085 13.3607 6.67521 12.6736 6.67653 11.9799C6.67534 11.2863 6.81108 10.5993 7.07595 9.95833C7.34083 9.31731 7.72963 8.73489 8.22006 8.24445C8.7105 7.75402 9.29292 7.36521 9.93394 7.10034C10.575 6.83546 11.2619 6.69973 11.9555 6.70091C13.2145 6.70091 14.3525 7.14791 15.2455 7.87891L17.8455 5.27991C16.2615 3.89891 14.2305 3.04691 11.9555 3.04691C10.7813 3.04348 9.61805 3.27222 8.53258 3.71998C7.4471 4.16774 6.46086 4.82569 5.63058 5.65597C4.8003 6.48625 4.14235 7.47249 3.6946 8.55796C3.24684 9.64343 3.01809 10.8067 3.02153 11.9809C3.01796 13.1551 3.24661 14.3185 3.69432 15.404C4.14204 16.4896 4.79997 17.4758 5.63028 18.3062C6.46059 19.1365 7.44689 19.7944 8.53242 20.2421C9.61795 20.6898 10.7813 20.9185 11.9555 20.9149C16.4225 20.9149 20.4845 17.6659 20.4845 11.9809C20.4845 11.4529 20.4035 10.8839 20.2825 10.3559Z"
        fill={color}
      />
    </svg>
  );
};

export default GoogleIcon;
