'use client';

import { ForwardArrowIcon, RightArrowIcon } from '@/assets';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { forwardRef, useCallback, useMemo, useState } from 'react';
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

const navigationButtonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-950 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-stone-900 text-stone-50 shadow hover:bg-stone-900/90',
        secondary:
          'absolute top-1/2 z-[2] -translate-y-1/2 bg-stone-100 text-stone-900 shadow-sm hover:bg-stone-100/80',
        distructive: 'bg-red-100 text-stone-900 shadow-sm hover:bg-stone-100/80'
      },
      size: {
        default: 'h-9 w-9',
        sm: 'h-8 w-8',
        lg: 'h-10 w-10'
      },
      iconSize: {
        default: '[&_svg]:h-4 [&_svg]:w-4',
        sm: '[&_svg]:h-3 [&_svg]:w-3',
        lg: '[&_svg]:h-5 [&_svg]:w-5'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      iconSize: 'default'
    }
  }
);

const defaultButtonOptions = {
  variant: '',
  size: '',
  iconSize: '',
  iconStyle: '',
  className: '',
  iconCss: '',
  leftBtn: {
    className: '',
    label: null
  },
  rightBtn: {
    className: '',
    label: null
  }
};

const Swiper = forwardRef(
  (
    {
      children,
      swiperOptions,
      buttonOptions = defaultButtonOptions,
      wrapperCss,
      variant,
      className
    },
    ref
  ) => {
    //-------------- State & Variables --------------//
    const [swiperRef, setSwiperRef] = useState(null);

    const handlePrevSlide = useCallback(() => {
      swiperRef?.slidePrev();
    }, [swiperRef]);

    const handleNextSlide = useCallback(() => {
      swiperRef?.slideNext();
    }, [swiperRef]);

    const Icon = useMemo(() => {
      switch (buttonOptions.iconStyle) {
        case 'arrow':
          return RightArrowIcon;
        case 'forward':
          return ForwardArrowIcon;
        default:
          return RightArrowIcon;
      }
    }, [buttonOptions.iconStyle]);

    const renderNavigationButton = useCallback(
      (direction) => {
        const isLeft = direction === 'left';
        const btnOptions = isLeft ? buttonOptions.leftBtn : buttonOptions.rightBtn;

        return (
          <button
            className={cn(
              navigationButtonVariants({
                variant,
                size: buttonOptions.size,
                iconSize: buttonOptions.iconSize,
                ...(buttonOptions.variant && { variant: buttonOptions.variant })
              }),
              isLeft ? 'left-2' : 'right-2',
              btnOptions?.className,
              buttonOptions.className
            )}
            onClick={isLeft ? handlePrevSlide : handleNextSlide}
            aria-label={btnOptions?.label}
          >
            <Icon className={cn('text-sm', isLeft && 'rotate-180', buttonOptions?.iconCss)} />
            {btnOptions?.label && btnOptions?.label}
          </button>
        );
      },
      [buttonOptions, variant, handlePrevSlide, handleNextSlide, Icon]
    );

    return (
      <div ref={ref} className={cn(carouselVariants({ variant }), buttonOptions, wrapperCss)}>
        {(swiperOptions?.navigation ?? true) && renderNavigationButton('left')}
        <SwiperReact.Swiper
          onSwiper={setSwiperRef}
          modules={[Navigation, Autoplay, Pagination, Parallax]}
          className={cn('h-full w-full', className)}
          spaceBetween={14}
          loop={true}
          speed={600}
          {...swiperOptions}
          // disable default navigation buttons
          navigation={false}
        >
          {children}
        </SwiperReact.Swiper>
        {(swiperOptions?.navigation ?? true) && renderNavigationButton('right')}
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
