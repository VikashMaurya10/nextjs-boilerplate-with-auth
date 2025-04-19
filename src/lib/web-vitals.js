'use client';

import { useReportWebVitals } from 'next/web-vitals';

export const WebVitals = () => {
  useReportWebVitals((metric) => {
    console.log(metric);
    /* eslint-disable capitalized-comments */
    // const errorLogString = `${metric.name} rating: ${metric.rating}`;
    // console.log('------------------------');
    // console.log({
    //   name: metric.name,
    //   rating: metric.rating
    // });
    // console.log('------------------------');
    /* eslint-enable capitalized-comments */
  });
};
