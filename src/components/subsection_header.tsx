import { ReactNode } from "react";

export default function SubsectionHeader({
  children,
}: {
  children?: ReactNode;
}) {
  return <h3 className="py-2 text-lg">{children}</h3>;
}
