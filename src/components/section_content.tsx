import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function SectionContent({ children }: { children?: ReactNode }) {
  return (
    <ErrorBoundary fallback={<div>Something went wrong here.</div>}>
      <div className="py-1">{children}</div>
    </ErrorBoundary>
  );
}
