import { FiDelete } from "react-icons/fi";

export type AppTheme = "orange" | "blue" | "violet";
type ButtonVariant = "number" | "operator" | "function" | "equals";

interface ButtonProps {
  text: string;
  variant?: ButtonVariant;
  theme: AppTheme;
  onClick: () => void;
  className?: string;
}

export function Button({ text, variant = "number", theme, onClick, className = "" }: ButtonProps) {
  const baseStyles =
    "w-14 h-14 rounded-2xl flex justify-center items-center text-xl font-bold transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md";

  const getThemeStyles = () => {
    switch (theme) {
      case "blue":
        return {
          operator: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/60",
          equals: "bg-blue-500 text-white hover:bg-blue-600 shadow-blue-200 dark:shadow-none",
        };
      case "violet":
        return {
          operator: "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 hover:bg-violet-200 dark:hover:bg-violet-900/60",
          equals: "bg-violet-500 text-white hover:bg-violet-600 shadow-violet-200 dark:shadow-none",
        };
      case "orange":
      default:
        return {
          operator: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-900/60",
          equals: "bg-orange-500 text-white hover:bg-orange-600 shadow-orange-200 dark:shadow-none",
        };
    }
  };

  const themeStyles = getThemeStyles();

  const variants = {
    number: "bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700",
    function: "bg-gray-100 dark:bg-gray-700 text-black dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600",
    operator: themeStyles.operator,
    equals: themeStyles.equals,
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className} focus:outline-none`}
    >
      {text === "d" ? <FiDelete size={20} /> : text}
    </button>
  );
}
