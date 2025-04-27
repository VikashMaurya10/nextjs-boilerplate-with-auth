import { Fragment } from 'react';

import { cn } from '@/lib/utils';

export const Stepper = ({ currentStep, steps, className }) => {
  const isFinalStep = (index) => index === steps?.length - 1;
  const isDone = (index) => currentStep - 1 > index;
  const isActive = (index) => currentStep - 1 === index;

  return (
    <div className={cn('flex items-center w-[90%] mx-auto pb-5 px-10', className)}>
      {steps?.map((step, index) => {
        return (
          <Fragment key={index}>
            {/* Step Circle */}
            <div
              className={cn(
                'relative w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-sm font-semibold transition-colors',
                // Finished Step
                isDone(index) && 'bg-primary text-primary-foreground',
                // Current Active Step
                isActive(index) && 'bg-card text-primary border border-primary',
                // Pending Step
                !isDone(index) && !isActive(index) && 'bg-muted text-muted-foreground'
              )}
            >
              {index + 1}
              {/* Step Label */}
              <div
                className={cn(
                  'absolute -bottom-6 text-xs font-medium text-foreground whitespace-nowrap',
                  !isDone(index) && !isActive(index) && 'text-muted-foreground'
                )}
              >
                {step}
              </div>
            </div>

            {/* Line between Steps */}
            {!isFinalStep(index) && (
              <div
                className={cn(
                  'h-0.5 w-full transition-colors',
                  isDone(index) ? 'bg-primary' : 'bg-muted'
                )}
              />
            )}
          </Fragment>
        );
      })}
    </div>
  );
};
