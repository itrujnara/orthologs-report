import { ReactNode } from "react";

export default function MiniCard({
  type,
  children,
}: {
  type?: string;
  children?: ReactNode;
}) {
  let borderClass = "border-nextflow-green hover:bg-nextflow-green";

  if (type === "error") {
    borderClass = "border-error-red hover:bg-error-red";
  } else if (type === "warning") {
    borderClass = "border-warning-yellow hover:bg-warning-yellow";
  }

  return (
    <div
      className={
        "w-fit h-fit px-2 py-1 rounded-full border-2 hover:border-primary-foreground hover:bg-nextflow-green transition-colors cursor-default " +
        borderClass
      }
    >
      {children}
    </div>
  );
}
