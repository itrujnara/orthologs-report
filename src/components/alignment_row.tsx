const aminoAcidColors = new Map([
  ["A", "bg-green-700"], // Alanine
  ["R", "bg-indigo-800"], // Arginine
  ["N", "bg-blue-800"], // Asparagine
  ["D", "bg-red-800"], // Aspartic Acid
  ["C", "bg-yellow-800"], // Cysteine
  ["Q", "bg-yellow-700"], // Glutamine
  ["E", "bg-orange-700"], // Glutamic Acid
  ["G", "bg-red-700"], // Glycine
  ["H", "bg-purple-700"], // Histidine
  ["I", "bg-green-800"], // Isoleucine
  ["L", "bg-green-600"], // Leucine
  ["K", "bg-indigo-700"], // Lysine
  ["M", "bg-brown-700"], // Methionine
  ["F", "bg-pink-800"], // Phenylalanine
  ["P", "bg-yellow-600"], // Proline
  ["S", "bg-teal-800"], // Serine
  ["T", "bg-green-200 text-gray-800"], // Threonine
  ["W", "bg-purple-800"], // Tryptophan
  ["Y", "bg-purple-600"], // Tyrosine
  ["V", "bg-blue-600"], // Valine
  ["-", "bg-background"], // Gap color
]);

export default function AlignmentRow({
  record,
}: {
  record: { header: string; sequence: string };
}) {
  return (
    <div className="flex flex-row gap-4 text-nowrap whitespace-nowrap">
      <div className="flex flex-row">
        {record.sequence.split("").map((char, i) => {
          const color = aminoAcidColors.get(char);
          const className = "text-[#CCCCCC] " + color;
          return (
            <div key={i} className={className}>
              {char}
            </div>
          );
        })}
      </div>
    </div>
  );
}
