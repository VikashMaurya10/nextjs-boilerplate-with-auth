/**
 * Loader component covering entire screen
 */
import { Spinner } from '@/assets';
import { cn } from '@/lib';

export const Loader = ({ className }) => {
  return (
    <section
      className={cn(
        'dark:bg-background pointer-events-none flex size-full items-center justify-center bg-secondary backdrop-blur-sm dark:text-white',
        className
      )}
    >
      <button type="button" className="flex gap-1" disabled>
        <Spinner className="animate-spin text-2xl sm:text-3xl" />
        <span className="sm:text-lg">Loading</span>
        <div className="space-x-1">
          <span className="inline-block size-[0.15rem] rounded-full bg-black dark:bg-white"></span>
          <span className="inline-block size-[0.15rem] rounded-full bg-black dark:bg-white"></span>
          <span className="inline-block size-[0.15rem] rounded-full bg-black dark:bg-white"></span>
        </div>
      </button>
    </section>
  );
};
