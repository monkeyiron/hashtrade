import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import transitionLottie from "../../public/lottie/transition.json";

export function LottieTransition() {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // Trigger transition on location change
    setIsAnimating(true);
    
    // Auto-dismiss after 3 seconds per requirements
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-background pointer-events-auto"
        >
          <div className="w-full h-full max-w-2xl max-h-[80vh] flex items-center justify-center">
            <Lottie 
              animationData={transitionLottie} 
              loop={false}
              className="w-[80%] h-[80%] object-contain"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
