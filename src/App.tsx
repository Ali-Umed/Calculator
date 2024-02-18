import "tailwindcss/tailwind.css";
import Button from "./component/Button";

function App() {
  const calculatorData = [
    "c",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];
  return (
    <div className="w-80 h-auto  mx-auto bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="bg-white rounded-lg p-2 mb-4">123</div>

      <div className=" grid grid-cols-4 space-y-3">
        {calculatorData.map((item, index) => (
          <Button text={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
