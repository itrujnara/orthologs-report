import { ReactNode } from "react";

export default function Powerful({
  children,
  type,
}: {
  children?: ReactNode;
  type?: string;
}) {
  // choose text color based on the type
  let textColor = "";
  if (type === "normal") {
    textColor = "text-nextflow-green";
  } else if (type === "info") {
    textColor = "text-info-blue";
  } else if (type === "warning") {
    textColor = "text-warning-yellow";
  } else if (type === "error") {
    textColor = "text-error-red";
  } else {
    textColor = "text-nextflow-green";
  }
  return <strong className={textColor}>{children}</strong>;
}
