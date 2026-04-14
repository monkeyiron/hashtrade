import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./logo";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Artificial delay to ensure fonts and styles are loaded
    // This allows the initial mounting sequence to feel deliberate
    const timer = setTimeout(() => setIsVisible(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Logo className="w-16 h-16 md:w-20 md:h-20" />
          </motion.div>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "circOut" }}
            className="h-[2px] bg-primary mt-8"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
