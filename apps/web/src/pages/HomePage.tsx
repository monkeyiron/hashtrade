import { VoyageScroller } from "@workspace/ui/components/voyage-scroller";
import { useDocumentTitle } from "@workspace/ui/hooks/use-document-title";

export function HomePage() {
  useDocumentTitle("Home", "Hashtrade — Startup sourcing and trade.");
  return (
    <div className="w-full">
      <VoyageScroller />
    </div>
  );
}
