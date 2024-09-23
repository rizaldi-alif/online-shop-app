export default function ButtonWithIcon({
  children,
  textAlign = "left",
  textSize = "sm",
  rounded = "md",
  border = "border",
  padding = "px-3 py-2",
  align = "middle",
  borderHoverColor = "gray-400",
  textColor = "",
  flex = true,
}) {
  return (
    <button
      className={
        flex
          ? `text-${textAlign} text-${textSize} rounded-${rounded} ${border} ${padding} w-full align-${align} hover:border-${borderHoverColor} transition-all duration-150 flex flex-col justify-center items-center gap-1 ${textColor}`
          : `text-${textAlign} text-${textSize} rounded-${rounded} ${border} ${padding} w-full align-${align} hover:border-${borderHoverColor} transition-all duration-150 ${textColor}`
      }
    >
      {children}
    </button>
  );
}
