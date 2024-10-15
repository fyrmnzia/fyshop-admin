import { useEffect, useState } from "react";

export const useOrigin = () => {
  const [origin, setOrigin] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  if (!mounted) {
    return ``;
  }

  return origin;
};
