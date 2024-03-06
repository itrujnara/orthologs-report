import { ReactNode } from "react";

export default function Card({
  children,
  type,
}: {
  children?: ReactNode;
  type?: string;
}) {
  // choose border color based on type
  let borderAccent = "";
  if (type === "normal") {
    borderAccent = "border-nextflow-green";
  } else if (type === "info") {
    borderAccent = "border-info-blue";
  } else if (type === "warning") {
    borderAccent = "border-warning-yellow";
  } else if (type === "error") {
    borderAccent = "border-error-red";
  } else {
    borderAccent = "border-nextflow-green";
  }
  return (
    <div
      className={"w-full h-min mt-2 p-4 rounded-lg border-2 " + borderAccent}
    >
      {children}
    </div>
  );
}
