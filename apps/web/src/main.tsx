import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ConvexProvider, ConvexReactClient } from "convex/react"

import "@workspace/ui/globals.css"
import { App } from "./App.tsx"

// Singleton client — instantiated outside React to avoid WebSocket reconnects on re-renders.
// Deployment: https://curious-frog-938.convex.cloud (team: iron-monkey, project: hashtrade)
const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string)

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConvexProvider client={convex}>
      <App />
    </ConvexProvider>
  </StrictMode>,
)
