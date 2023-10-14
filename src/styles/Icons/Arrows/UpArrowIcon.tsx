const UpArrowIcon = ({
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
        d="M11 8.41394V17.9999H13V8.41394L17.293 12.7069L18.707 11.2929L12 4.58594L5.29297 11.2929L6.70697 12.7069L11 8.41394Z"
        fill={color}
      />
    </svg>
  );
};

export default UpArrowIcon;
