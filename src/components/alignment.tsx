import { useState } from "react";
import AlignmentRow from "./alignment_row";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function Alignment({
  records,
  limit = 10,
}: {
  records: { header: string; sequence: string }[];
  limit?: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleRecords = isExpanded ? records : records.slice(0, limit);

  return (
    <div className="py-4">
      <div className="font-mono flex flex-row gap-4">
        <div>
          {visibleRecords.map((record, i) => (
            <div key={i}>{record.header}</div>
          ))}
        </div>
        <div className="overflow-x-scroll">
          {visibleRecords.map((record, i) => (
            <AlignmentRow key={i} record={record} />
          ))}
        </div>
      </div>
      {records.length > limit && (
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? <FaMinus /> : <FaPlus />}
        </button>
      )}
    </div>
  );
}
