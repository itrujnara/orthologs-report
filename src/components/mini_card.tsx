import { ReactNode } from "react";

export default function MiniCard({ children }: { children?: ReactNode }) {
  return (
    <div className="w-fit h-fit px-2 py-1 rounded-full border-nextflow-green border-2 hover:border-primary-foreground hover:bg-nextflow-green transition-colors cursor-default">
      {children}
    </div>
  );
}
