'use client';

import { Button, ImageComponent, Swiper, SwiperSlide } from '@/components';
import { useLocalStorage } from '@/hooks';
import { signOut } from 'next-auth/react';
import Loading from './loading';
import { IMAGES } from '@/assets/data';

const Index = () => {
  //-------------- State & Variables --------------//
  const { isLoading, value, setValue } = useLocalStorage();

  //-------------- Other Methods --------------//
  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <Button
        onClick={() => {
          signOut();
        }}
      >
        Signout
      </Button>
      <Swiper
        wrapperCss="mt-4"
        variant="secondary"
        swiperOptions={{
          slidesPerView: 1,
          spaceBetween: 10,
          navigation: true,
          pagination: {
            clickable: true
          },
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          breakpoints: {
            640: {
              slidesPerView: 3
            },
            1024: {
              slidesPerView: 4
            }
          }
        }}
        className="b h-[300px]"
      >
        {IMAGES.map((img, index) => (
          <SwiperSlide key={index}>
            <ImageComponent
              src={img}
              width={400}
              height={500}
              className={'size-full object-cover'}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        wrapperCss="px-1 gap-1 mt-4 h-[300px]"
        swiperOptions={{
          speed: 600,
          slidesPerView: 1,
          spaceBetween: 10,
          navigation: true,
          pagination: {
            clickable: true
          },
          loop: true,
          parallax: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          breakpoints: {
            640: {
              slidesPerView: 3
            },
            1024: {
              slidesPerView: 4
            }
          }
        }}
      >
        {IMAGES.map((img, index) => (
          <SwiperSlide key={index} className="relative overflow-hidden rounded-lg">
            <ImageComponent
              src={img}
              width={400}
              height={500}
              className={'size-full object-cover'}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Index;
