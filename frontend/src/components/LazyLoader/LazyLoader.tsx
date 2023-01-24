import { FC, useEffect, useState } from "react";

import CircularLoader from "../Atoms/Loaders/CircularLoader";
import PageLoader from "../Atoms/Loaders/PageLoader";

export interface LazyLoaderProps {
  delay?: number;
  variant?: "page" | "sub-page";
}

const LazyLoader: FC<LazyLoaderProps> = ({ delay = 250, variant = "page" }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);

  if (!show) return null;
  return variant === "sub-page" ? (
    <CircularLoader align="center" marginTop={4} size="lg" />
  ) : (
    <PageLoader />
  );
};

export default LazyLoader;
