import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "@workspace/ui/components/navbar";
import { Footer } from "@workspace/ui/components/footer";
import { ChatWidget } from "@workspace/ui/components/chat-widget";

import { RouterLink } from "../components/router-link";

export function RootLayout() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen flex flex-col">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar LinkComponent={RouterLink} currentPath={location.pathname} />
      <div id="main-content" className="flex-1 border-b border-border">
        <Outlet />
      </div>
      <Footer LinkComponent={RouterLink} />
      <ChatWidget />
    </div>
  );
}
