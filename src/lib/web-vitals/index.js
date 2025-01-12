'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    console.log(metric);
    // const errorLogString = `${metric.name} rating: ${metric.rating}`;
    // console.log('------------------------');
    // console.log({
    //   name: metric.name,
    //   rating: metric.rating
    // });
    // console.log('------------------------');
  });
}
