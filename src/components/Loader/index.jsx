/**
 * Loader component covering entire screen
 */
import { Spinner } from '@/assets';

export const Loader = () => {
  return (
    <section className="pointer-events-none fixed inset-0 z-50 grid min-h-screen w-full place-items-center bg-white backdrop-blur-sm">
      <button type="button" className="flex gap-1" disabled>
        <Spinner className="animate-spin text-2xl sm:text-3xl" />
        <span className="sm:text-lg">Loading</span>
        <div className="space-x-1">
          <span className="inline-block size-[0.15rem] rounded-full bg-black"></span>
          <span className="inline-block size-[0.15rem] rounded-full bg-black"></span>
          <span className="inline-block size-[0.15rem] rounded-full bg-black"></span>
        </div>
      </button>
    </section>
  );
};
