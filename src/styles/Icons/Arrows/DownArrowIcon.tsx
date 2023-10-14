const DownArrowIcon = ({
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
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.707 12.707L17.293 11.293L13 15.586V6H11V15.586L6.70697 11.293L5.29297 12.707L12 19.414L18.707 12.707Z"
        fill={color}
      />
    </svg>
  );
};

export default DownArrowIcon;
