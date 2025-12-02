import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import CalculatorOutput from "./component/CalculatorOutput";
import { Button, AppTheme } from "./component/Button";

type ButtonVariant = "number" | "operator" | "function" | "equals";

interface CalculatorButton {
  text: string;
  variant: ButtonVariant;
  onClick: () => void;
  className?: string;
}

export default function App() {
  const [output, setOutput] = useState("0");
  const [number, setNumber] = useState<number[]>([]);
  const [operation, setOperation] = useState<string[]>([]);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [theme, setTheme] = useState<AppTheme>("orange");

  // Initialize dark mode on mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newMode;
    });
  };

  const handleClear = () => {
    setOutput("0");
    setNumber([]);
    setOperation([]);
  };

  const handleDelete = () => {
    setOutput((prevOutput) => {
      const newOutput = prevOutput.slice(0, -1);
      return newOutput || "0";
    });
  };

  const handleNegate = () => {
    setOutput((prevOutput) =>
      prevOutput.charAt(0) === "-"
        ? prevOutput.slice(1)
        : prevOutput.charAt(0) !== "0"
        ? "-" + prevOutput
        : prevOutput
    );
  };

  const handlePercent = () => {
    if (!isNaN(parseFloat(output))) {
      setOutput((prevOutput) => String(parseFloat(prevOutput) / 100));
    }
  };

  const handleOperator = (operator: string) => {
    if (!isNaN(parseFloat(output))) {
      setNumber((prevNumbers) => [...prevNumbers, parseFloat(output)]);
      setOperation((prevOperations) => [...prevOperations, operator]);
      setOutput(operator);
    }
  };

  const handleNumber = (numStr: string) => {
    if (output === "0" || isNaN(parseFloat(output))) {
      setOutput(numStr);
    } else {
      setOutput((prevOutput) => prevOutput + numStr);
    }
  };

  const handleDecimal = () => {
    if (!output.includes(".")) {
      setOutput((prevOutput) => prevOutput + ".");
    }
  };

  const handleEquals = () => {
    let lastNumber = 0;
    if (!isNaN(parseFloat(output))) {
      lastNumber = Number(output);
    }

    let result = lastNumber;

    for (let i = 0; i < operation.length; i++) {
      const nextNum = 0 || number[i];

      switch (operation[i]) {
        case "+":
          result += nextNum;
          break;
        case "-":
          result -= nextNum;
          break;
        case "x":
          result *= nextNum;
          break;
        case "/":
          result /= nextNum;
          break;
        default:
          break;
      }
    }

    setOutput(result.toString());
    setNumber([]);
    setOperation([]);
  };

  const calculatorData: CalculatorButton[] = [
    { text: "C", variant: "function", onClick: handleClear },
    { text: "+/-", variant: "function", onClick: handleNegate },
    { text: "%", variant: "function", onClick: handlePercent },
    { text: "/", variant: "operator", onClick: () => handleOperator("/") },
    { text: "7", variant: "number", onClick: () => handleNumber("7") },
    { text: "8", variant: "number", onClick: () => handleNumber("8") },
    { text: "9", variant: "number", onClick: () => handleNumber("9") },
    { text: "x", variant: "operator", onClick: () => handleOperator("x") },
    { text: "4", variant: "number", onClick: () => handleNumber("4") },
    { text: "5", variant: "number", onClick: () => handleNumber("5") },
    { text: "6", variant: "number", onClick: () => handleNumber("6") },
    { text: "-", variant: "operator", onClick: () => handleOperator("-") },
    { text: "1", variant: "number", onClick: () => handleNumber("1") },
    { text: "2", variant: "number", onClick: () => handleNumber("2") },
    { text: "3", variant: "number", onClick: () => handleNumber("3") },
    { text: "+", variant: "operator", onClick: () => handleOperator("+") },
    { text: "⌫", variant: "function", onClick: handleDelete },
    { text: "0", variant: "number", onClick: () => handleNumber("0") },
    { text: ".", variant: "number", onClick: handleDecimal },
    { text: "=", variant: "equals", onClick: handleEquals },
  ];

  const getPageBgColor = () => {
    if (darkMode) return "bg-gray-900";
    switch (theme) {
      case "blue": return "bg-blue-100";
      case "violet": return "bg-violet-100";
      case "orange":
      default: return "bg-orange-100";
    }
  };

  const getCalculatorBgColor = () => {
    if (darkMode) return "bg-[#1a1a1a] border-gray-800";
    switch (theme) {
      case "blue": return "bg-blue-50 border-blue-100";
      case "violet": return "bg-violet-50 border-violet-100";
      case "orange":
      default: return "bg-orange-50 border-orange-100";
    }
  };

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center transition-colors duration-500 ${getPageBgColor()}`}>
      
      <div className="w-full max-w-[320px] flex justify-between items-center mb-6 px-2">
        <div className="flex gap-2">
          <button 
            onClick={() => setTheme("orange")}
            className={`w-6 h-6 rounded-full bg-orange-500 border-2 ${theme === 'orange' ? 'border-gray-600 dark:border-white scale-110' : 'border-transparent'} transition-all shadow-sm`}
            aria-label="Orange Theme"
          />
          <button 
            onClick={() => setTheme("blue")}
            className={`w-6 h-6 rounded-full bg-blue-500 border-2 ${theme === 'blue' ? 'border-gray-600 dark:border-white scale-110' : 'border-transparent'} transition-all shadow-sm`}
            aria-label="Blue Theme"
          />
          <button 
            onClick={() => setTheme("violet")}
            className={`w-6 h-6 rounded-full bg-violet-500 border-2 ${theme === 'violet' ? 'border-gray-600 dark:border-white scale-110' : 'border-transparent'} transition-all shadow-sm`}
            aria-label="Violet Theme"
          />
        </div>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 transition-colors backdrop-blur-sm shadow-sm"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>

      <div className={`w-full max-w-[320px] p-6 rounded-3xl shadow-xl dark:shadow-2xl dark:shadow-black/50 transition-all duration-500 border ${getCalculatorBgColor()}`}>
        <CalculatorOutput output={output} />
        
        <div className="grid grid-cols-4 gap-3">
          {calculatorData.map((item, index) => (
            <Button
              key={index}
              text={item.text}
              variant={item.variant}
              theme={theme}
              onClick={item.onClick}
              className={item.className}
            />
          ))}
        </div>
      </div>
      
      <div className="mt-8 text-sm text-gray-500 dark:text-gray-500 font-medium">
        Simple & Clean
      </div>
    </div>
  );
}
