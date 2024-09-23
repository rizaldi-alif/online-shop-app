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
  classname = "",
}) {
  return (
    <button
      className={`text-${textSize} text-${textAlign} ${padding} rounded-${rounded} bg-${bg} text-${textColor}  transition-all duration-150 ${border} ${borderColor} hover:bg-${bgHover} ${classname}`}
    >
      {title}
    </button>
  );
}
