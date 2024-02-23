import React, { useState } from "react";
import { Button } from "./component/Button";

export default function App() {
  const [output, setOutput] = useState("0");
  const [number, setNumber] = useState<number[]>([]);
  const [operation, setOperation] = useState<string[]>([]);

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
    setOutput((prevOutput) => String(parseFloat(prevOutput) / 100));
  }

  function handleOperator(operator: string) {
    if (output !== "0" && !isNaN(parseFloat(output))) {
      setNumber((prevNumbers) => [...prevNumbers, parseFloat(output)]);
    }
    setOperation((prevOperations) => [...prevOperations, operator]);
    setOutput(operator);
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

    // if (!isNaN(parseFloat(output))) {
    //   setNumber((prevNumbers) => [...prevNumbers, parseFloat(output)]);
    // }

    let result = number[0] || lastNumber;
    console.log(result, number, operation);

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
    { text: "/", color: "bg-orange-400", onClick: () => handleOperator("/") },
    { text: "7", color: "bg-sky-200", onClick: () => handleNumber("7") },
    { text: "8", color: "bg-sky-200", onClick: () => handleNumber("8") },
    { text: "9", color: "bg-sky-200", onClick: () => handleNumber("9") },
    { text: "x", color: "bg-orange-400", onClick: () => handleOperator("x") },
    { text: "4", color: "bg-sky-200", onClick: () => handleNumber("4") },
    { text: "5", color: "bg-sky-200", onClick: () => handleNumber("5") },
    { text: "6", color: "bg-sky-200", onClick: () => handleNumber("6") },
    { text: "-", color: "bg-orange-400", onClick: () => handleOperator("-") },
    { text: "1", color: "bg-sky-200", onClick: () => handleNumber("1") },
    { text: "2", color: "bg-sky-200", onClick: () => handleNumber("2") },
    { text: "3", color: "bg-sky-200", onClick: () => handleNumber("3") },
    { text: "+", color: "bg-orange-400", onClick: () => handleOperator("+") },
    { text: "d", color: "bg-orange-400", onClick: () => handleDelete() },
    { text: "0", color: "bg-sky-200", onClick: () => handleNumber("0") },
    { text: ".", color: "bg-sky-200", onClick: () => handleDecimal() },
    { text: "=", color: "bg-orange-400", onClick: () => handleEquals() },
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-80 h-auto mx-auto bg-gray-100 p-5 rounded-lg shadow-inner shadow-slate-300">
        <div className="bg-white rounded-lg p-2 mb-6 text-right pr-4">
          {output}
        </div>

        <div className="grid grid-cols-4 gap-3">
          {calculatorData.map((item, index) => (
            <Button
              text={item.text}
              color={item.color}
              key={index}
              onClick={item.onClick}
              output={output}
              setOutput={setOutput}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
