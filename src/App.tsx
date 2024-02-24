import { useEffect, useState } from "react";
import { Button } from "./component/Button";
import ColorButton from "./component/ColorButton";
import { FiSun, FiMoon } from "react-icons/fi";

export default function App() {
  const [output, setOutput] = useState("0");
  const [number, setNumber] = useState<number[]>([]);
  const [operation, setOperation] = useState<string[]>([]);
  const [theme, setTheme] = useState({
    bgColor: "bg-blue-50",
    buttonFunctionCOlor: "bg-orange-400",
  });
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    darkMode
      ? setTheme({
          bgColor: "bg-gray-700",
          buttonFunctionCOlor: "bg-blue-400",
        })
      : setTheme({
          bgColor: "bg-blue-50",
          buttonFunctionCOlor: "bg-orange-400",
        });
  }, [darkMode]);

  const handleColorChange = (lightColor: string, darkColor: string) => {
    if (darkMode) {
      setTheme({
        bgColor: darkColor,
        buttonFunctionCOlor: "bg-blue-400",
      });
    } else {
      setTheme({
        bgColor: lightColor,
        buttonFunctionCOlor: "bg-orange-400",
      });
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  function handleClear() {
    setOutput("0");
    setNumber([]);
    setOperation([]);
  }

  function handleDelete() {
    setOutput((prevOutput) => {
      const newOutput = prevOutput.slice(0, -1);
      return newOutput || "0";
    });
  }

  function handleNegate() {
    setOutput((prevOutput) =>
      prevOutput.charAt(0) === "-"
        ? prevOutput.slice(1)
        : prevOutput.charAt(0) !== "0"
        ? "-" + prevOutput
        : prevOutput
    );
  }

  function handlePercent() {
    if (!isNaN(parseFloat(output))) {
      setOutput((prevOutput) => String(parseFloat(prevOutput) / 100));
    }
  }

  function handleOperator(operator: string) {
    if (!isNaN(parseFloat(output))) {
      setNumber((prevNumbers) => [...prevNumbers, parseFloat(output)]);
      setOperation((prevOperations) => [...prevOperations, operator]);
      setOutput(operator);
    }
    console.log(number);
  }

  function handleNumber(numStr: string) {
    console.log(number);

    if (output === "0" || isNaN(parseFloat(output))) {
      setOutput(numStr);
    } else {
      setOutput((prevOutput) => prevOutput + numStr);
    }
  }

  function handleDecimal() {
    if (!output.includes(".")) {
      setOutput((prevOutput) => prevOutput + ".");
    }
  }

  function handleEquals() {
    console.log(number);

    let lastNumber = 0;
    if (!isNaN(parseFloat(output))) {
      lastNumber = Number(output);
    }
    console.log(lastNumber);

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
  }

  const calculatorData = [
    { text: "c", color: "bg-gray-300", onClick: () => handleClear() },
    { text: "+/-", color: "bg-gray-300", onClick: () => handleNegate() },
    { text: "%", color: "bg-gray-300", onClick: () => handlePercent() },
    {
      text: "/",
      color: theme.buttonFunctionCOlor,
      onClick: () => handleOperator("/"),
    },
    { text: "7", color: "bg-sky-200", onClick: () => handleNumber("7") },
    { text: "8", color: "bg-sky-200", onClick: () => handleNumber("8") },
    { text: "9", color: "bg-sky-200", onClick: () => handleNumber("9") },
    {
      text: "x",
      color: theme.buttonFunctionCOlor,
      onClick: () => handleOperator("x"),
    },
    { text: "4", color: "bg-sky-200", onClick: () => handleNumber("4") },
    { text: "5", color: "bg-sky-200", onClick: () => handleNumber("5") },
    { text: "6", color: "bg-sky-200", onClick: () => handleNumber("6") },
    {
      text: "-",
      color: theme.buttonFunctionCOlor,
      onClick: () => handleOperator("-"),
    },
    { text: "1", color: "bg-sky-200", onClick: () => handleNumber("1") },
    { text: "2", color: "bg-sky-200", onClick: () => handleNumber("2") },
    { text: "3", color: "bg-sky-200", onClick: () => handleNumber("3") },
    {
      text: "+",
      color: theme.buttonFunctionCOlor,
      onClick: () => handleOperator("+"),
    },
    {
      text: "d",
      color: theme.buttonFunctionCOlor,
      onClick: () => handleDelete(),
    },
    { text: "0", color: "bg-sky-200", onClick: () => handleNumber("0") },
    { text: ".", color: "bg-sky-200", onClick: () => handleDecimal() },
    {
      text: "=",
      color: theme.buttonFunctionCOlor,
      onClick: () => handleEquals(),
    },
  ];

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen ${
        darkMode ? "bg-[#201e1e]" : "bg-lime-50"
      }`}
    >
      <div className="flex justify-between w-80 items-center mb-4">
        <div>
          <ColorButton
            lightColor="bg-blue-50"
            darkColor="bg-gray-700"
            darkMode={darkMode}
            onClick={() => handleColorChange("bg-blue-50", "bg-gray-700")}
          />
          <ColorButton
            darkMode={darkMode}
            lightColor="bg-green-50"
            darkColor="bg-[#130909]"
            onClick={() => handleColorChange("bg-green-50", "bg-[#130909]")}
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
        className={`w-80 h-auto p-5 rounded-lg shadow-inner shadow-slate-400 ${theme.bgColor} `}
      >
        <div className="bg-white rounded-lg p-2 mb-6 text-right pr-4 border-2 border-gray">
          {output}
        </div>

        <div className="grid grid-cols-4 gap-3">
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
