export default function CalculatorOutput({ output }: { output: string }) {
  const displayValue = output === "NaN" ? "Error" : output;

  return (
    <div className="w-full mb-6 px-2">
      <div className="text-right">
        <span className="text-4xl sm:text-5xl font-bold text-black dark:text-white tracking-tight break-all">
          {displayValue}
        </span>
      </div>
    </div>
  );
}
