import React, { useState } from "react";
import { Button } from "./component/Button";

export default function App() {
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
    {
      text: "d",
      color: "bg-orange-400",
      onClick: () => handleDelete(),
    },
    { text: "0", color: "bg-sky-200", onClick: () => handleNumber("0") },
    { text: ".", color: "bg-sky-200", onClick: () => handleDecimal(".") },
    { text: "=", color: "bg-orange-400", onClick: () => handleEquals() },
  ];

  const [output, setOutput] = React.useState("0");
  const [number, setNumber] = useState<number[]>([]);
  const [operation, setOperation] = useState<string[]>([]);

  function handleClear() {
    setOutput("0");
  }

  function handleDelete() {
    setOutput((output) => output.slice(1));
    if (!output) {
      setOutput("0");
    }
  }

  function handleNegate() {
    setOutput(output.charAt(0) === "-" ? output.slice(1) : "-" + output);
  }

  function handlePercent() {
    setOutput(String(parseFloat(output) / 100));
  }

  function handleOperator(operation: string) {
    setNumber((oldNumbers) => [...oldNumbers, parseFloat(operation)]);
    setOperation((oldOperation) => [...oldOperation, operation]);

    if (
      output.slice(-1) == "+" ||
      output.slice(-1) == "-" ||
      output.slice(-1) == "x" ||
      output.slice(-1) == "/"
    ) {
      setOutput((output) => output.slice(0, -1) + operation);
      return;
    }
    setOutput((output) => output + operation);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleNumber(number: string) {
    if (output == "0") {
      setOutput(number);
      return;
    }
    setOutput((output) => output + number);
  }

  function handleDecimal(number: string) {
    setOutput((output) => output + number);
  }

  function handleEquals() {}

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-80 h-auto mx-auto bg-gray-100 p-5 rounded-lg shadow-inner shadow-slate-300 ">
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
