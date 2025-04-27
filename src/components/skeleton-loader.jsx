import { cn } from '@/lib';

export const Skeleton = ({ count = 1, className = '' }) => {
  const skeletons = Array.from({ length: count });

  return (
    <>
      {skeletons.map((_, i) => (
        <span
          key={i}
          className={cn(`loading-skeleton h-4 w-full block rounded-sm`, className)}
          style={{
            '--animation-delay': `${i * 0.08}s`,
          }}
          aria-busy="true"
        />
      ))}
    </>
  );
};
