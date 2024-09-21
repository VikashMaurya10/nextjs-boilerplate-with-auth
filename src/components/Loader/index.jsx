/**
 * Loader component covering entire screen
 */
import { Spinner } from '@/assets';

export const Loader = () => {
  return (
    <section className="pointer-events-none grid min-h-[80vh] w-full place-items-center">
      <button type="button" className="flex gap-1" disabled>
        <Spinner className="animate-spin text-2xl sm:text-3xl" />
        <span className="sm:text-lg">Loading</span>
        <div className="space-x-1">
          <span className="inline-block size-1 rounded-full bg-white"></span>
          <span className="inline-block size-1 rounded-full bg-white"></span>
          <span className="inline-block size-1 rounded-full bg-white"></span>
        </div>
      </button>
    </section>
  );
};
