'use client';

import { ForwardArrowIcon, LeftArrowIcon, RightArrowIcon } from '@/assets';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { forwardRef, useState } from 'react';
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
      children,
      swiperOptions,
      wrapperCss,
      variant,
      className,
      icon = 'default',
      leftBtnCss,
      rightBtnCss,
      iconCss,
      buttonCss
    },
    ref
  ) => {
    //-------------- State & Variables --------------//
    const [swiperRef, setSwiperRef] = useState(null);
    const navigationBtnCss = cn(
      'aspect-square p-1.5 bg-white rounded-full',
      variant == 'secondary' && 'absolute top-1/2 z-[2] -translate-y-1/2',
      buttonCss
    );

    return (
      <div ref={ref} className={cn(carouselVariants({ variant }), wrapperCss)}>
        {(swiperOptions?.navigation ?? true) && (
          <button
            className={cn(navigationBtnCss, leftBtnCss, variant == 'secondary' && 'left-2')}
            onClick={() => swiperRef?.slidePrev()}
          >
            {icon === 'default' && <LeftArrowIcon className={cn('text-sm', iconCss)} />}
            {icon === 'secondary' && <ForwardArrowIcon className={cn('rotate-180', iconCss)} />}
          </button>
        )}
        <SwiperReact.Swiper
          onSwiper={setSwiperRef}
          spaceBetween={14}
          loop={true}
          modules={[Navigation, Autoplay, Pagination, Parallax]}
          className={cn('h-full w-full', className)}
          {...swiperOptions}
          // disable default navigation buttons
          navigation={false}
        >
          {children}
        </SwiperReact.Swiper>
        {(swiperOptions?.navigation ?? true) && (
          <button
            className={cn(navigationBtnCss, rightBtnCss, variant == 'secondary' && 'right-2')}
            onClick={() => swiperRef?.slideNext()}
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
