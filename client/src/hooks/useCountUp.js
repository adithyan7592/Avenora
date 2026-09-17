import { useEffect, useRef, useState } from "react";

// "1000+" -> { prefix: "", number: 1000, suffix: "+" }
// "100%"  -> { prefix: "", number: 100, suffix: "%" }
function parseValue(raw) {
  const match = String(raw).match(/^([^\d]*)([\d,.]+)([^\d]*)$/);
  if (!match) return { prefix: "", number: 0, suffix: String(raw), decimals: 0 };
  const [, prefix, numStr, suffix] = match;
  const clean = numStr.replace(/,/g, "");
  const decimals = clean.includes(".") ? clean.split(".")[1].length : 0;
  return { prefix, number: parseFloat(clean), suffix, decimals };
}

function reducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function useCountUp(rawValue, { start = false, duration = 1400 } = {}) {
  const { prefix, number, suffix, decimals } = parseValue(rawValue);
  const format = (n) =>
    prefix + (decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString()) + suffix;

  const [display, setDisplay] = useState(format(0));
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || startedRef.current) return undefined;
    startedRef.current = true;

    if (reducedMotion()) {
      setDisplay(format(number));
      return undefined;
    }

    const startTime = performance.now();
    let frame;

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplay(format(number * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, number, duration]);

  return display;
}