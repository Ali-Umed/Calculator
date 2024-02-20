export function Button({
  text,
  color,
  onClick,
  output,
  setOutput,
}: {
  text: string;
  color: string;
  onClick: (arg?: string) => void;
  output: string;
  setOutput: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <button
      onClick={() => onClick()}
      className={`${color} rounded-full ${
        text === "00" ? "col-span-2 w-32 h-11" : "w-11 h-11"
      } row-span-2`}
    >
      {text}
    </button>
  );
}
