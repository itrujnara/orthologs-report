import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function SectionParagraph({
  children,
}: {
  children?: ReactNode;
}) {
  return (
    <ErrorBoundary fallback={<p>Something went wrong here.</p>}>
      <p className="py-1 text-justify">{children}</p>
    </ErrorBoundary>
  );
}
