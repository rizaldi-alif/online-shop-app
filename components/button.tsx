export default function Button({
  title = "",
  bg = "sky-500",
  bgHover = "sky-800",
  textColor = "white",
  rounded = "none",
  textAlign = "center",
  textSize = "sm",
  padding = "p-2",
  border = "",
  borderColor = "",
  hoverBorderColor = "",
  hoverTextColor = "",
}) {
  return (
    <button
      className={`text-${textSize} text-${textAlign} ${padding} rounded-${rounded} bg-${bg} text-${textColor}  transition-all duration-150 ${border} ${borderColor}
      hover:${hoverTextColor} hover:${hoverBorderColor} hover:bg-${bgHover}`}
    >
      {title}
    </button>
  );
}
