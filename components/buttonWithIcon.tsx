export default function ButtonWithIcon({
  children,
  textAlign = "left",
  textSize = "sm",
  rounded = "md",
  border = "border",
  padding = "px-3 py-2",
  align = "middle",
  borderHoverColor = "gray-400",
}) {
  return (
    <button
      className={`text-${textAlign} text-${textSize} rounded-${rounded} ${border} ${padding} w-full align-${align} hover:border-${borderHoverColor} transition-all duration-150`}
    >
      {children}
    </button>
  );
}
