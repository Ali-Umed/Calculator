import "tailwindcss/tailwind.css";
import Button from "./component/Button";

function App() {
  // const calculatorData = [
  //   { text: "c", color: "bg-red-500" },
  //   { text: "+/-", color: "bg-blue-500" },
  //   { text: "%", color: "bg-green-500" },
  //   { text: "/", color: "bg-yellow-500" },
  //   { text: "7", color: "bg-purple-500" },
  //   { text: "8", color: "bg-orange-500" },
  //   { text: "9", color: "bg-pink-500" },
  //   { text: "x", color: "bg-teal-500" },
  //   { text: "4", color: "bg-indigo-500" },
  //   { text: "5", color: "bg-gray-500" },
  //   { text: "6", color: "bg-cyan-500" },
  //   { text: "-", color: "bg-lime-500" },
  //   { text: "1", color: "bg-purple-500" },
  //   { text: "2", color: "bg-rose-500" },
  //   { text: "3", color: "bg-emerald-500" },
  //   { text: "+", color: "bg-violet-500" },
  //   { text: "0", color: "bg-amber-500" },
  //   { text: ".", color: "bg-teal-500" },
  //   { text: "=", color: "bg-orange-500" },
  // ];

  const calculatorData = [
    { text: "c", color: "bg-gray-300" },
    { text: "+/-", color: "bg-gray-300" },
    { text: "%", color: "bg-gray-300" },
    { text: "/", color: "bg-orange-400" },
    { text: "7", color: "bg-sky-200" },
    { text: "8", color: "bg-sky-200" },
    { text: "9", color: "bg-sky-200" },
    { text: "x", color: "bg-orange-400" },
    { text: "4", color: "bg-sky-200" },
    { text: "5", color: "bg-sky-200" },
    { text: "6", color: "bg-sky-200" },
    { text: "-", color: "bg-orange-400" },
    { text: "1", color: "bg-sky-200" },
    { text: "2", color: "bg-sky-200" },
    { text: "3", color: "bg-sky-200" },
    { text: "+", color: "bg-orange-400" },
    { text: "0", color: "bg-sky-200" },
    { text: ".", color: "bg-sky-200" },
    { text: "=", color: "bg-orange-400" },
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-80 h-auto mx-auto bg-gray-100 p-5 rounded-lg shadow-inner shadow-slate-300 ">
        <div className="bg-white rounded-lg p-2 mb-6 text-right pr-4">123</div>

        <div className="grid grid-cols-4 gap-3">
          {calculatorData.map((item, index) => (
            <Button text={item.text} color={item.color} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
