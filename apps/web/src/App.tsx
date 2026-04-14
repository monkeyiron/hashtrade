import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { ThemeProvider } from "@workspace/ui/components/theme-provider"
import { LoadingScreen } from "@workspace/ui/components/loading-screen"
import { OfflineScreen } from "./components/offline-screen"
import { LottieTransition } from "./components/lottie-transition"
import { PageTransition } from "./components/page-transition"
import { RootLayout } from "./layouts/RootLayout"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage"
import { ServicesPage } from "./pages/ServicesPage"
import { ProductsPage } from "./pages/ProductsPage"
import { ContactPage } from "./pages/ContactPage"
import { NotFoundPage } from "./pages/NotFoundPage"
import { ScrollToTop } from "./components/ScrollToTop"

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route element={<RootLayout />}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/products" element={<PageTransition><ProductsPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
      </Route>
    </Routes>
  );
}

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="hashtrade-theme">
      <LoadingScreen />
      <OfflineScreen />
      <BrowserRouter>
        <ScrollToTop />
        <LottieTransition />
        <AnimatedRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
