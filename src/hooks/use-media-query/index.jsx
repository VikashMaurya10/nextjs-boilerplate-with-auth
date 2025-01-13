
'use client';
import { useEffect, useState } from 'react';

export const useMediaQuery = () => {
  const [breakpoints, setBreakpoints] = useState({
    base: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    '2xl': false
  });

  useEffect(() => {
    const queries = [
      '(max-width: 639px)', // base
      '(min-width: 640px) and (max-width: 767px)', // sm
      '(min-width: 768px) and (max-width: 1023px)', // md
      '(min-width: 1024px) and (max-width: 1279px)', // lg
      '(min-width: 1280px) and (max-width: 1535px)', // xl
      '(min-width: 1536px)' // 2xl and up
    ];
    // const queries = [
    //   '(max-width: 639px)', // base
    //   '(min-width: 640px)', // sm
    //   '(min-width: 768px)', // md
    //   '(min-width: 1024px)', // lg
    //   '(min-width: 1280px)', // xl
    //   '(min-width: 1536px)' // 2xl and up
    // ];

    const mediaQueryLists = queries.map((q) => window.matchMedia(q));

    const updateBreakpoints = () => {
      const newBreakpoints = {
        base: mediaQueryLists[0].matches,
        sm: mediaQueryLists[1].matches,
        md: mediaQueryLists[2].matches,
        lg: mediaQueryLists[3].matches,
        xl: mediaQueryLists[4].matches,
        '2xl': mediaQueryLists[5].matches
      };

      setBreakpoints(newBreakpoints);
    };

    // Initial check
    updateBreakpoints();

    // Set up listeners for each media query
    const listeners = mediaQueryLists.map((mql) => {
      const listener = () => updateBreakpoints();
      mql.addEventListener('change', listener);
      return () => mql.removeEventListener('change', listener);
    });

    // Cleanup listeners on unmount
    return () => {
      listeners.forEach((removeListener) => removeListener());
    };
  }, []);

  return breakpoints;
};
