import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import noInternetLottie from "../lottie/no-internet.json";

export function OfflineScreen() {
  const [isOffline, setIsOffline] = useState(typeof navigator !== 'undefined' ? !navigator.onLine : false);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOffline && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background/90 p-6 overscroll-none"
        >
          <div className="w-full max-w-xs md:max-w-sm mb-12">
            <Lottie animationData={noInternetLottie} loop={true} />
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight mb-4 uppercase">
            Connection Lost
          </h2>
          <p className="text-muted-foreground text-center font-sans font-light max-w-md tracking-wide">
            We are unable to connect to the network. Please restore your internet connection.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
