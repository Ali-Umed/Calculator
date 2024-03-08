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
      className={`w-8 h-8 rounded-full mx-2 border-2 border-gray-300 transition-all duration-300 ${
        darkMode ? darkColor : lightColor
      } hover:opacity-70 focus:outline-none`}
      onClick={onClick}
    ></button>
  );
}
