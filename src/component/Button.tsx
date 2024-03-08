import { FiDelete } from "react-icons/fi";

export function Button({
  text,
  color,
  onClick,
}: {
  text: string;
  color: string;
  onClick: (arg?: string) => void;
}) {
  return (
    <button
      onClick={() => onClick()}
      className={`${color} rounded-full text-center flex justify-center items-center ${
        text === "00" ? "col-span-2 w-32 h-12" : "w-12 h-12"
      } row-span-2 hover:opacity-70 focus:outline-none`}
    >
      {text === "d" ? <FiDelete /> : text}
    </button>
  );
}
