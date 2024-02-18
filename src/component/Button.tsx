export default function Button({
  text,
  color,
}: {
  text: string;
  color: string;
}) {
  return (
    <button
      className={`rounded-full bg-${color}-500  bg-warmGray-500 ${
        text === "0" ? "col-span-2 w-32 h-11" : "w-11 h-11"
      } row-span-2`}
    >
      {text}
    </button>
  );
}
