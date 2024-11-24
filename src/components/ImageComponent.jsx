'use client';
import { Fallback } from '@/assets';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

export const ImageComponent = ({ src, className, ...props }) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const isError = error || !src;

  return (
    <Image
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
      onError={(e) => {
        setError(true);
      }}
      loading="lazy"
    />
  );
};
