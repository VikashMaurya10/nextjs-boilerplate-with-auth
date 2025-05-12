import { forwardRef } from 'react';

import { DateInput, DateSegment, TimeField } from 'react-aria-components';

import { cn } from '@/lib/utils';

// ================================== //
const TimeInput = forwardRef(
  (
    {
      className,
      dateInputClassName,
      segmentClassName,
      disabled,
      'aria-invalid': dataInvalid,
      ...props
    },
    ref
  ) => {
    return (
      <TimeField
        ref={ref}
        className={cn('relative', className)}
        isDisabled={disabled}
        {...props}
        isInvalid={dataInvalid}
        aria-label="Time"
        shouldForceLeadingZeros
      >
        <DateInput
          aria-invalid={dataInvalid}
          className={cn(
            'peer inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-md border bg-background px-3 py-2 text-sm shadow-black',
            'data-[focus-within]:outline-none data-[focus-within]:ring-1 data-[focus-within]:ring-ring',
            'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
            'dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
            dateInputClassName
          )}
        >
          {(segment) => (
            <DateSegment
              segment={segment}
              className={cn(
                'inline rounded p-0.5 caret-transparent outline-0',
                'data-[focused]:bg-foreground/10 data-[focused]:text-foreground',
                'data-[placeholder]:text-muted-foreground',
                'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
                segmentClassName
              )}
            />
          )}
        </DateInput>
      </TimeField>
    );
  }
);

TimeInput.displayName = 'TimeInput';

// ================================== //

export { TimeInput };
