'use client';

import { ForwardArrowIcon, LeftArrowIcon, RightArrowIcon } from '@/assets';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Autoplay, Navigation, Pagination, Parallax } from 'swiper/modules';
import * as SwiperReact from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const carouselVariants = cva('', {
  variants: {
    variant: {
      default: 'flex gap-2 items-center justify-between w-full h-full',
      secondary: 'relative'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

const Swiper = forwardRef(
  (
    {
      id,
      children,
      swiperOptions,
      wrapperCss,
      variant,
      className,
      icon = 'default',
      leftBtnCss,
      rightBtnCss,
      iconCss
    },
    ref
  ) => {
    //-------------- State & Variables --------------//
    const key = id;

    return (
      <div ref={ref} className={cn(carouselVariants({ variant }), wrapperCss)}>
        {(swiperOptions?.navigation ?? true) && (
          <button
            className={cn(
              `p${key} aspect-square p-1.5`,
              variant == 'secondary' && 'absolute left-0 top-1/2 z-[2] -translate-y-1/2',
              leftBtnCss
            )}
          >
            {icon === 'default' && <LeftArrowIcon className={cn('text-sm', iconCss)} />}
            {icon === 'secondary' && <ForwardArrowIcon className={cn('rotate-180', iconCss)} />}
          </button>
        )}

        <Swiper
          spaceBetween={0}
          loop={true}
          navigation={{
            prevEl: `.p${key}`,
            nextEl: `.n${key}`
          }}
          modules={[Navigation, Autoplay, Pagination, Parallax]}
          className={cn('h-full w-full', className)}
          {...swiperOptions}
        >
          {children}
        </Swiper>
        {(swiperOptions?.navigation ?? true) && (
          <button
            className={cn(
              `n${key} aspect-square p-1.5`,
              variant == 'secondary' && 'absolute right-0 top-1/2 z-[2] -translate-y-1/2',
              rightBtnCss
            )}
          >
            {icon === 'default' && <RightArrowIcon className={cn('text-sm', iconCss)} />}
            {icon === 'secondary' && <ForwardArrowIcon className={cn('', iconCss)} />}
          </button>
        )}
      </div>
    );
  }
);

Swiper.displayName = 'Swiper';

const SwiperSlide = forwardRef(({ className, children, ...props }, ref) => (
  <SwiperReact.SwiperSlide ref={ref} className={cn(className)} {...props}>
    {children}
  </SwiperReact.SwiperSlide>
));

SwiperSlide.displayName = 'SwiperSlide';

export { Swiper, SwiperSlide };
