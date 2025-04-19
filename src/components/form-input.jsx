'use client';

import { CloseEyeIcon, OpenEyeIcon } from '@/assets';
import { cn } from '@/lib/utils';
import { forwardRef, useState } from 'react';
import { Input } from '.';

const FormInput = forwardRef(
  ({ className, label, type, showEyeBtn = true, labelCss, icon, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPasswordField = type === 'password' && showEyeBtn;

    return (
      <div className={cn('text-gray-60/50 relative w-full text-lg', className)}>
        {icon && <div className="absolute top-1/2 left-4 -translate-y-1/2">{icon}</div>}
        <Input
          className={cn(
            'peer h-full w-full rounded-md border-2 bg-transparent px-3 py-2.5 font-sans font-normal transition-transform duration-200 placeholder-shown:border placeholder-shown:border-black/20 focus:border focus:border-black focus:outline-0 disabled:border-0 disabled:bg-gray-50',
            icon ? 'pl-12' : 'pl-4',
            isPasswordField ? 'pr-10' : 'pr-4'
          )}
          placeholder=" "
          ref={ref}
          type={showPassword ? 'text' : type}
          {...props}
          autoComplete="off"
        />
        {label && (
          <label
            className={cn(
              'pointer-events-none absolute flex h-auto w-fit truncate bg-transparent transition-all duration-200 select-none',

              'peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-lg',

              'peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:left-4 peer-not-placeholder-shown:-translate-y-1/2 peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:text-xs',

              'peer-focus:bg-background peer-focus:top-0 peer-focus:left-4 peer-focus:px-1 peer-focus:text-xs',

              'peer-disabled:text-transparent',

              icon ? 'left-12' : 'left-5',
              labelCss
            )}
          >
            {label}
          </label>
        )}
        {isPasswordField && (
          <button
            type="button"
            className="absolute top-1/2 right-3.5 -translate-y-1/2 [&_svg]:size-5"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
          </button>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';

export { FormInput };
