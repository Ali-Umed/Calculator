import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="w-80 h-auto  mx-auto bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="bg-white rounded-lg p-2 mb-4">123</div>

      <div className=" grid grid-cols-4 space-y-3">
        <Button text={"c"} />
        <Button text={"+/-"} />
        <Button text={"%"} />
        <Button text={"/"} />
        <Button text={"7"} />
        <Button text={"8"} />
        <Button text={"9"} />
        <Button text={"x"} />
        <Button text={"4"} />
        <Button text={"5"} />
        <Button text={"6"} />
        <Button text={"-"} />
        <Button text={"1"} />
        <Button text={"2"} />
        <Button text={"3"} />
        <Button text={"+"} />
        <Button text={"0"} />
        <Button text={"."} />
        <Button text={"="} />
      </div>
    </div>
  );
}

function Button({ text }: { text: string }) {
  return <button className=" rounded-full bg-gray-400 size-10">{text}</button>;
}
export default App;
