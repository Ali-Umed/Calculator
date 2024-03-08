export default function CalculatorOutput({ output }: { output: string }) {
  return (
    <div className="bg-white rounded-lg p-2 mb-6 text-right pr-4 border-2 border-gray">
      {output}
    </div>
  );
}
