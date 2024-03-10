export default function CalculatorOutput({ output }: { output: string }) {
  return (
    <div className="bg-white rounded-lg p-4 mb-6 text-right border border-gray-300">
      <p className="text-xl font-bold">
        {output == "NaN" ? "undifind" : output}
      </p>
    </div>
  );
}
