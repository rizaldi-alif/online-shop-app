export default function ButtonWithIcon({
  children,
  textAlign = "left",
  textSize = "sm",
  rounded = "md",
  border = "border",
  padding = "px-3 py-2",
  align = "middle",
  borderHoverColor = "gray-400",
  textColor = ''
}) {
  return (
    <button
      className={`rounded-${rounded} ${border} ${padding} w-full align-${align} hover:border-${borderHoverColor} transition-all duration-150 flex flex-col items-center justify-center gap-px ${textColor}`}
    >
      {children}
    </button>
  );
}
