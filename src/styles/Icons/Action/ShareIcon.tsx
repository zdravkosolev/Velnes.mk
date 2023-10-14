const ShareIcon = ({
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
        d="M4 11.5V16C4 16.5523 4.44772 17 5 17H14.5C15.0523 17 15.5 16.5523 15.5 16V11.5M9.5 14V4M15 8L9.85277 3.3207C9.65528 3.14117 9.35161 3.14839 9.16288 3.33712L4.5 8"
        stroke={color}
      />
    </svg>
  );
};

export default ShareIcon;
