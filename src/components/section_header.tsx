import { ReactNode } from "react";

export default function SectionHeader({ children }: { children?: ReactNode }) {
  return <h2 className="py-2 pt-5 border-b-2 text-xl">{children}</h2>;
}
