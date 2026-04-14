import { PageLayout } from "@workspace/ui/components/page-layout";
import { Button } from "@workspace/ui/components/button";
import { useDocumentTitle } from "@workspace/ui/hooks/use-document-title";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { IsoLost } from "@workspace/ui/components/illustrations";

export function NotFoundPage() {
  useDocumentTitle("404", "Page not found.");
  
  return (
    <PageLayout>
      <main className="w-full min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        {/* Isometric 404 illustration */}
        <div className="w-full max-w-xs md:max-w-sm h-[200px] md:h-[280px] relative mb-4 opacity-80">
          <IsoLost className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />
        </div>

        <h1 className="text-[90px] md:text-[160px] leading-none font-black font-heading tracking-tighter text-muted-foreground/10 italic -mt-6">
          404
        </h1>
        <h2 className="heading-section font-bold tracking-tight mt-[-16px] mb-6">
          Signal lost.
        </h2>
        <p className="text-[14px] text-muted-foreground font-light max-w-sm mb-10 leading-[1.75]">
          The page you are looking for does not exist or has been moved. We recommend returning to the main feed.
        </p>
        <Button asChild
          className="h-12 px-8 font-medium bg-primary hover:bg-primary/90 text-primary-foreground tracking-[0.05em] uppercase text-[12px] shadow-none"
        >
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return Home
          </Link>
        </Button>
      </main>
    </PageLayout>
  );
}
