export default function Button({
  title = "",
  bg = "sky-500",
  bgHover = "sky-800",
  textColor = "white",
  rounded = "none",
  textAlign = "center",
  textSize = "sm",
  padding = "p-2",
}) {
  return (
    <button
      className={`text-${textSize} text-${textAlign} ${padding} rounded-${rounded} bg-${bg} text-${textColor} hover:bg-${bgHover} transition-all duration-150`}
    >
      {title}
    </button>
  );
}
