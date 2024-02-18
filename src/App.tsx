import "tailwindcss/tailwind.css";
import Button from "./component/Button";

function App() {
  const calculatorData = [
    { text: "c", color: "red" },
    { text: "+/-", color: "blue" },
    { text: "%", color: "green" },
    { text: "/", color: "yellow" },
    { text: "7", color: "purple" },
    { text: "8", color: "orange" },
    { text: "9", color: "pink" },
    { text: "x", color: "teal" },
    { text: "4", color: "indigo" },
    { text: "5", color: "gray" },
    { text: "6", color: "cyan" },
    { text: "-", color: "lime" },
    { text: "1", color: "purple" },
    { text: "2", color: "rose" },
    { text: "3", color: "emerald" },
    { text: "+", color: "violet" },
    { text: "0", color: "amber" },
    { text: ".", color: "teal" },
    { text: "=", color: "orange" },
  ];

  return (
    <div className="w-80 h-auto mx-auto bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="bg-white rounded-lg p-2 mb-4">123</div>

      <div className="grid grid-cols-4 gap-3">
        {calculatorData.map((item, index) => (
          <Button text={item.text} color={item.color} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
