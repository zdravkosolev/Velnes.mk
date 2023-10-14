const MoreIcon = ({
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
      viewBox="0 0 16 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2" cy="2" r="2" fill={color} />
      <circle cx="8" cy="2" r="2" fill={color} />
      <circle cx="14" cy="2" r="2" fill={color} />
    </svg>
  );
};

export default MoreIcon;
