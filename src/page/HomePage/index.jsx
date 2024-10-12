/**
 * This is the Home page.
 */
'use client';

import { Swiper, SwiperSlide } from '@/components';
import { useErrorLog } from '@/hooks';
import Image from 'next/image';

export const HomePage = () => {
  //-------------- State & Variables --------------//
  const handleError = useErrorLog('page/HomePage');

  //-------------- Use Effects --------------//

  //-------------- Other Methods --------------//

  return (
    <>
      <section>
        Home page
        <Swiper
          id={'xxc'}
          variant="secondary"
          swiperOptions={{
            slidesPerView: 3
          }}
        >
          <SwiperSlide className="b">
            <Image src={'/vite.svg'} width={300} height={300} className="h-auto" alt="sd" />
          </SwiperSlide>
          <SwiperSlide className="b">
            <Image src={'/vite.svg'} width={300} height={300} className="h-auto" alt="sd" />
          </SwiperSlide>
          <SwiperSlide className="b">
            <Image src={'/vite.svg'} width={300} height={300} className="h-auto" alt="sd" />
          </SwiperSlide>
          <SwiperSlide className="b">
            <Image src={'/vite.svg'} width={300} height={300} className="h-auto" alt="sd" />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
