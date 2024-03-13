import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import ThemeButton from "./component/ThemeButton";
import CalculatorOutput from "./component/CalculatorOutput";
import { Button } from "./component/Button";

export default function App() {
  const [output, setOutput] = useState("0");
  const [number, setNumber] = useState<number[]>([]);
  const [operation, setOperation] = useState<string[]>([]);
  const [theme, setTheme] = useState({
    bgColor: "bg-blue-50",
    buttonFunctionColor: "bg-orange-400",
  });
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const updateDayMode = () => {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    };

    updateDayMode();

    const handleSystemColorSchemeChange = () => {
      updateDayMode();
    };

    const systemColorSchemeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: light)"
    );
    systemColorSchemeMediaQuery.addEventListener(
      "change",
      handleSystemColorSchemeChange
    );

    return () => {
      systemColorSchemeMediaQuery.removeEventListener(
        "change",
        handleSystemColorSchemeChange
      );
    };
  }, []); // Run this effect only once on component mount

  useEffect(() => {
    const newTheme = darkMode
      ? { bgColor: "bg-gray-700", buttonFunctionColor: "bg-blue-400" }
      : { bgColor: "bg-blue-50", buttonFunctionColor: "bg-orange-400" };
    setTheme(newTheme);
  }, [darkMode]);

  const handleColorChange = (lightColor: string, darkColor: string) => {
    const newTheme = darkMode
      ? { bgColor: darkColor, buttonFunctionColor: "bg-blue-400" }
      : { bgColor: lightColor, buttonFunctionColor: "bg-orange-400" };
    setTheme(newTheme);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
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

    let result = number[0] || 0;
    for (let i = 0; i < operation.length; i++) {
      const nextNum = number[i + 1] || lastNumber;
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

  const calculatorData = [
    { text: "C", color: "bg-gray-300", onClick: handleClear },
    { text: "+/-", color: "bg-gray-300", onClick: handleNegate },
    { text: "%", color: "bg-gray-300", onClick: handlePercent },
    {
      text: "/",
      color: theme.buttonFunctionColor,
      onClick: () => handleOperator("/"),
    },
    { text: "7", color: "bg-sky-200", onClick: () => handleNumber("7") },
    { text: "8", color: "bg-sky-200", onClick: () => handleNumber("8") },
    { text: "9", color: "bg-sky-200", onClick: () => handleNumber("9") },
    {
      text: "x",
      color: theme.buttonFunctionColor,
      onClick: () => handleOperator("x"),
    },
    { text: "4", color: "bg-sky-200", onClick: () => handleNumber("4") },
    { text: "5", color: "bg-sky-200", onClick: () => handleNumber("5") },
    { text: "6", color: "bg-sky-200", onClick: () => handleNumber("6") },
    {
      text: "-",
      color: theme.buttonFunctionColor,
      onClick: () => handleOperator("-"),
    },
    { text: "1", color: "bg-sky-200", onClick: () => handleNumber("1") },
    { text: "2", color: "bg-sky-200", onClick: () => handleNumber("2") },
    { text: "3", color: "bg-sky-200", onClick: () => handleNumber("3") },
    {
      text: "+",
      color: theme.buttonFunctionColor,
      onClick: () => handleOperator("+"),
    },
    { text: "⌫", color: theme.buttonFunctionColor, onClick: handleDelete },
    { text: "0", color: "bg-sky-200", onClick: () => handleNumber("0") },
    { text: ".", color: "bg-sky-200", onClick: handleDecimal },
    { text: "=", color: theme.buttonFunctionColor, onClick: handleEquals },
  ];

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen transition-all duration-1000 ${
        darkMode ? "bg-[#201e1e]" : "bg-teal-50"
      }`}
    >
      <div className="flex justify-between w-80 items-center mb-4">
        <div>
          <ThemeButton
            lightColor="bg-blue-50"
            darkColor="bg-gray-700"
            darkMode={darkMode}
            onClick={() => handleColorChange("bg-blue-50", "bg-gray-700")}
          />
          <ThemeButton
            darkMode={darkMode}
            lightColor="bg-lime-50"
            darkColor="bg-[#130909]"
            onClick={() => handleColorChange("bg-lime-50", "bg-[#130909]")}
          />
          <ThemeButton
            lightColor="bg-emerald-50"
            darkColor="bg-blue-950"
            darkMode={darkMode}
            onClick={() => handleColorChange("bg-emerald-50", "bg-blue-950")}
          />
        </div>
        <button
          className="text-gray-700 dark:text-gray-200"
          onClick={toggleDarkMode}
        >
          {darkMode ? <FiSun /> : <FiMoon color="black" />}
        </button>
      </div>
      <div
        className={`w-80 h-auto p-5 rounded-lg shadow-md ${theme.bgColor} transition-all duration-500 `}
      >
        <CalculatorOutput output={output} />
        <div className="grid grid-cols-4 gap-4 place-items-center">
          {calculatorData.map((item, index) => (
            <Button
              text={item.text}
              color={item.color}
              key={index}
              onClick={item.onClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
