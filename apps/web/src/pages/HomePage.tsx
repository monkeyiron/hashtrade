import { VoyageScroller } from "@workspace/ui/components/voyage-scroller";
import { useDocumentTitle } from "@workspace/ui/hooks/use-document-title";

import { RouterLink } from "../components/router-link";

export function HomePage() {
  useDocumentTitle("Home", "Hashtrade — Startup sourcing and trade.");
  return (
    <div className="w-full">
      <VoyageScroller LinkComponent={RouterLink} />
    </div>
  );
}
