import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins early
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Optional utility for global initializations
export const initGsap = () => {
  gsap.config({
    autoSleep: 60,
    force3D: true,
  });
};

export { gsap, ScrollTrigger };
