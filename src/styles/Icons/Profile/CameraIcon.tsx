const CameraIcon = ({
  color = "#0D0D0D",
  size = 20,
}: {
  color?: string;
  size?: number;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 4.5V16.5C0 17.6046 0.895431 18.5 2 18.5H18C19.1046 18.5 20 17.6046 20 16.5V4.5C20 3.39543 19.1046 2.5 18 2.5H15.122L13.1707 0H7.31707L4.87805 2.5H2C0.895429 2.5 0 3.39543 0 4.5ZM10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15ZM13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z"
        fill={color}
      />
    </svg>
  );
};

export default CameraIcon;
