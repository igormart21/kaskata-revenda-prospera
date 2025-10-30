import { useEffect, useRef, useState, ReactNode } from "react";

type LazySectionProps = {
  children: ReactNode;
  rootMargin?: string;
};

export default function LazySection({ children, rootMargin = "200px" }: LazySectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect();
            }
          });
        },
        { root: null, rootMargin, threshold: 0.01 }
      );

      observer.observe(element);
      return () => observer.disconnect();
    }

    setIsVisible(true);
  }, [rootMargin]);

  return <div ref={ref}>{isVisible ? children : null}</div>;
}


