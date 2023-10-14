const BackIcon = ({
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
        d="M13 16L7.70711 10.7071C7.31658 10.3166 7.31658 9.68342 7.70711 9.29289L13 4"
        stroke={color}
        stroke-width="1.5"
      />
    </svg>
  );
};

export default BackIcon;
