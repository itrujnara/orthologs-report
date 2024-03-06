import { ErrorBoundary } from "react-error-boundary";
import Card from "./card";

export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary
      fallback={<Card type="error">Could not create this section.</Card>}
    >
      <section>{children}</section>
    </ErrorBoundary>
  );
}
