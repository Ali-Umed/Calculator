export default function ThemeButton({
  lightColor,
  darkColor,
  onClick,
  darkMode,
}: {
  onClick: () => void;
  darkMode: boolean;
  lightColor: string;
  darkColor: string;
}) {
  return (
    <button
      className={`w-8 h-8 rounded-full mx-2 border-2 border-gray-400  transition-all duration-500  ${
        darkMode ? darkColor : lightColor
      }`}
      onClick={onClick}
    ></button>
  );
}