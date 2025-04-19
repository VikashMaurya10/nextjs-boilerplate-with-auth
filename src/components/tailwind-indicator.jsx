import { env } from '@/lib';
import { Tooltip, TooltipContent, TooltipTrigger } from '.';

export const TailwindIndicator = () => {
  if (env.NODE_ENV === 'production') return null;

  return (
    <Tooltip>
      <TooltipTrigger
        data-tailwind-indicator=""
        className="dark:bg-background dark:border-muted dark:ring-background fixed right-5 bottom-16 z-50 flex size-9 cursor-pointer items-center justify-center rounded-full border-2 border-stone-500 bg-stone-700 p-1.5 font-mono text-xs text-white ring-1 ring-stone-700"
      >
        <svg viewBox="0 0 35 21" fill="none" className="text-black dark:text-white">
          <path
            className="fill-sky-400"
            d="M17.183 0C12.6 0 9.737 2.291 8.59 6.873c1.719-2.29 3.723-3.15 6.014-2.577 1.307.326 2.242 1.274 3.275 2.324 1.685 1.71 3.635 3.689 7.894 3.689 4.582 0 7.445-2.291 8.591-6.872-1.718 2.29-3.723 3.15-6.013 2.576-1.308-.326-2.243-1.274-3.276-2.324C23.39 1.98 21.44 0 17.183 0ZM8.59 10.309C4.01 10.309 1.145 12.6 0 17.182c1.718-2.291 3.723-3.15 6.013-2.577 1.308.326 2.243 1.274 3.276 2.324 1.685 1.71 3.635 3.689 7.894 3.689 4.582 0 7.445-2.29 8.59-6.872-1.718 2.29-3.722 3.15-6.013 2.577-1.307-.327-2.242-1.276-3.276-2.325-1.684-1.71-3.634-3.689-7.893-3.689Z"
          ></path>
        </svg>
      </TooltipTrigger>
      <TooltipContent>
        Screen: <ScreenIndicator />
      </TooltipContent>
    </Tooltip>
  );
};

const ScreenIndicator = () => {
  return (
    <>
      <div className="inline-block sm:hidden">xs</div>
      <div className="hidden sm:inline-block md:hidden">sm</div>
      <div className="hidden md:inline-block lg:hidden">md</div>
      <div className="hidden lg:inline-block xl:hidden">lg</div>
      <div className="hidden xl:inline-block 2xl:hidden">xl</div>
      <div className="hidden 2xl:inline-block">2xl</div>
    </>
  );
};
