import { useState, useEffect } from "react";

export const useTiming = () => {
  const [timing, setTiming] = useState(0.3);

  useEffect(() => {
    if (window.innerWidth < 465) {
      setTiming(0.25);
    } else if (window.innerWidth >= 465 && window.innerWidth < 768) {
      setTiming(0.35);
    } else if (window.innerWidth >= 768 && window.innerWidth < 2000) {
      setTiming(0.45);
    } else {
      setTiming(0.55);
    }
  }, []);

  return timing;
};
