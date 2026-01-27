// useInView.js
import { useEffect, useRef, useState } from 'react';

// Options can be passed to the Intersection Observer
const defaultOptions = {
  threshold: 0.1, // Trigger when 10% of the element is visible
  rootMargin: '0px 0px -50px 0px', // Shrink the bottom margin
};

const useInView = (options = defaultOptions) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      // Update state only when visibility changes
      if (entry.isIntersecting) {
        setIsInView(true);
        // Optional: Stop observing once it's visible
        observer.unobserve(element);
      }
    }, options);

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return [ref, isInView];
};

export default useInView;
