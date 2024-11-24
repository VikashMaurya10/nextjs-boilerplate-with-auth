'use client';
import { IMAGES } from '@/assets/data';
import { ImageComponent, Swiper, SwiperSlide } from '@/components';

export const CarouselDemoes = ({ variant }) => {
  return (
    <>
      <div className="">
        <h1 className="mb-2 text-center text-xl text-white">Default Carousel</h1>
        <Swiper
          className={'h-[300px]'}
          id="default"
          buttonCss="bg-white backdrop-blur-sm p-3 rounded-full"
          variant={variant}
          swiperOptions={{
            speed: 600,
            autoplay: {
              delay: 3000
            },
            slidesPerView: 3,
            spaceBetween: 16,
            pagination: {
              clickable: true
            }
          }}
        >
          {IMAGES?.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <ImageComponent
                  src={item}
                  className="size-full rounded-xl"
                  height={300}
                  width={400}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="mt-4">
        <h1 className="mb-2 text-center text-xl text-white">Secondary Carousel</h1>
        <Swiper
          className={
            'h-[300px] !pb-6 [&_.swiper-pagination]:flex [&_.swiper-pagination]:items-center [&_.swiper-pagination]:justify-center [&_.swiper-pagination]:p-0'
          }
          id="secondary"
          buttonCss="bg-white backdrop-blur-sm p-3 rounded-full"
          variant={'secondary'}
          swiperOptions={{
            speed: 600,
            autoplay: {
              delay: 3000
            },
            slidesPerView: 3,
            spaceBetween: 16,
            pagination: {
              clickable: true
            }
          }}
        >
          {IMAGES?.map((item, i) => {
            return (
              <SwiperSlide key={i} className="relative">
                <ImageComponent
                  src={item}
                  className="size-full rounded-xl"
                  height={300}
                  width={400}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
