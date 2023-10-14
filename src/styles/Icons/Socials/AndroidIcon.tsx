const AndroidIcon = ({ color, size }: { color: string; size: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.344 8.70989C17.637 8.70989 17.065 9.28189 17.065 9.98789V14.5179C17.065 14.8571 17.1997 15.1824 17.4396 15.4223C17.6794 15.6621 18.0047 15.7969 18.344 15.7969C18.6832 15.7969 19.0085 15.6621 19.2483 15.4223C19.4882 15.1824 19.623 14.8571 19.623 14.5179V9.98789C19.623 9.28189 19.051 8.70989 18.344 8.70989ZM5.65595 8.70989C4.94895 8.70989 4.37695 9.28189 4.37695 9.98789V14.5179C4.37695 14.8571 4.5117 15.1824 4.75156 15.4223C4.99142 15.6621 5.31674 15.7969 5.65595 15.7969C5.99517 15.7969 6.32048 15.6621 6.56034 15.4223C6.8002 15.1824 6.93495 14.8571 6.93495 14.5179V9.98789C6.93508 9.81994 6.90209 9.65361 6.83784 9.49843C6.7736 9.34325 6.67938 9.20227 6.56058 9.08356C6.44177 8.96485 6.30071 8.87073 6.14549 8.80661C5.99026 8.7425 5.8239 8.70963 5.65595 8.70989ZM14.545 4.90089L15.313 3.51289C15.3354 3.47337 15.3498 3.42979 15.3552 3.38467C15.3607 3.33955 15.3571 3.2938 15.3448 3.25007C15.3324 3.20634 15.3114 3.16551 15.2831 3.12994C15.2549 3.09437 15.2198 3.06478 15.18 3.04289C15.1402 3.0205 15.0965 3.00622 15.0512 3.00089C15.0059 2.99556 14.96 2.99929 14.9162 3.01185C14.8724 3.02441 14.8315 3.04556 14.7959 3.07406C14.7603 3.10257 14.7308 3.13786 14.709 3.17789L13.92 4.59789C13.332 4.36289 12.684 4.22989 12 4.22989C11.316 4.22989 10.668 4.36189 10.08 4.59689L9.29095 3.17889C9.26913 3.13886 9.23957 3.10357 9.20399 3.07506C9.16841 3.04656 9.12752 3.02541 9.0837 3.01285C9.03987 3.00029 8.99399 2.99656 8.94871 3.00189C8.90343 3.00722 8.85966 3.0215 8.81995 3.04389C8.78032 3.06598 8.74544 3.09567 8.7173 3.13126C8.68916 3.16685 8.66831 3.20764 8.65596 3.2513C8.6436 3.29496 8.63998 3.34062 8.6453 3.38568C8.65062 3.43074 8.66477 3.47431 8.68695 3.51389L9.45495 4.90189C8.07195 5.68989 7.14795 7.09889 7.14795 8.70989C7.14795 8.72089 7.14795 8.73089 7.14995 8.74389C7.14795 8.74989 7.14795 8.75689 7.14795 8.76289V8.76389H16.851V8.70989C16.852 7.09889 15.928 5.69089 14.545 4.90089ZM9.75995 6.86889C9.71445 6.86856 9.66946 6.85927 9.62754 6.84156C9.58563 6.82384 9.54762 6.79804 9.51567 6.76563C9.45116 6.70018 9.41529 6.61179 9.41595 6.51989C9.41662 6.42799 9.45376 6.34012 9.51921 6.27561C9.58466 6.2111 9.67306 6.17523 9.76495 6.17589C9.85685 6.17655 9.94472 6.21369 10.0092 6.27914C10.0737 6.34459 10.1096 6.43299 10.109 6.52489C10.1083 6.61679 10.0711 6.70466 10.0057 6.76917C9.94025 6.83368 9.85185 6.86955 9.75995 6.86889ZM14.24 6.86889C14.1527 6.86225 14.0712 6.82292 14.0118 6.75876C13.9523 6.69461 13.9193 6.61036 13.9193 6.52289C13.9193 6.43542 13.9523 6.35117 14.0118 6.28701C14.0712 6.22286 14.1527 6.18352 14.24 6.17689C14.3317 6.17689 14.4197 6.21334 14.4846 6.27823C14.5495 6.34312 14.586 6.43112 14.586 6.52289C14.586 6.61465 14.5495 6.70266 14.4846 6.76755C14.4197 6.83243 14.3317 6.86889 14.24 6.86889ZM7.14795 16.1199C7.14795 16.7659 7.67295 17.2909 8.32195 17.2909H8.90795V19.6919C8.90795 20.0311 9.04271 20.3564 9.28256 20.5963C9.52242 20.8361 9.84774 20.9709 10.187 20.9709C10.5262 20.9709 10.8515 20.8361 11.0913 20.5963C11.3312 20.3564 11.466 20.0311 11.466 19.6919V17.2909H12.532V19.6919C12.532 20.3989 13.104 20.9699 13.809 20.9699C14.518 20.9699 15.09 20.3989 15.09 19.6919V17.2909H15.676C16.324 17.2909 16.85 16.7669 16.85 16.1199V9.02789H7.14795V16.1199Z"
        fill={color}
      />
    </svg>
  );
};

export default AndroidIcon;