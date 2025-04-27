'use client';

import NextImage from 'next/image';
import { useState } from 'react';

import { Fallback } from '@/assets';
import { cn } from '@/lib/utils';

/**
 * This is a wrapper around the Next.js Image component that handles loading and error states.
 * @param {*} props - The props for the Image component.
 * @param {string} props.src - The source URL of the image.
 * @param {string} [props.className] - Additional class names to apply to the image.
 * @param {number} [props.width] - The width of the image.
 * @param {number} [props.height] - The height of the image.
 * @param {string} [props.alt] - The alt text for the image.
 * @returns JSX.Element
 */
export const Image = ({ src, className, ...props }) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const isError = error || !src;

  return (
    <NextImage
      src={isError ? Fallback : src}
      alt=""
      className={cn(
        className,
        isLoading ? 'blur' : 'blur-0',
        isError && 'bg-white !object-contain'
      )}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      {...props}
      onLoad={() => {
        setIsLoading(false);
      }}
      onError={() => {
        setError(true);
      }}
      loading="lazy"
    />
  );
};
