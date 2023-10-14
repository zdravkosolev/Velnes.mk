function TimeIcon({
  color = "#0D0D0D",
  size = 20,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM9 5V13V13.5588L9.4759 13.8517L15.9759 17.8517L17.0241 16.1483L11 12.4412V5H9Z"
        fill={color}
      />
    </svg>
  );
}

export default TimeIcon;
