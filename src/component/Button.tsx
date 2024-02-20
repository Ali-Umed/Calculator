export default function Button({
  text,
  color,
}: {
  text: string;
  color: string;
}) {
  // console.log(`bg-${color}-500 `);
  return (
    <button
      className={` ${color}  rounded-full   ${
        text === "0" ? "col-span-2 w-32 h-11" : "w-11 h-11"
      } row-span-2`}
    >
      {text}
    </button>
  );
}
