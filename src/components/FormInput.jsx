'use client';
import { CloseEyeIcon, OpenEyeIcon } from '@/assets';
import { cn } from '@/lib/utils';
import { forwardRef, useState } from 'react';

const FormInput = forwardRef(({ className, label, type, showEyeBtn = true, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type == 'password' && showEyeBtn;
  return (
    <div className={'relative w-full'}>
      <input
        className={cn(
          'peer h-full w-full rounded-[7px] border border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline outline-0 transition-all duration-200 placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-50',
          isPasswordField ? 'pr-10' : ''
        )}
        placeholder=" "
        ref={ref}
        type={showPassword ? 'text' : type}
        {...props}
        autoComplete={'off'}
      />
      {label && (
        <label className="before:content[' '] after:content[' '] peer-focus:before:border-t-= pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all duration-200 before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-[1rem] before:border-l before:border-t before:border-gray-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-[1rem] after:border-r after:border-t after:border-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-l peer-focus:before:!border-gray-900 peer-focus:after:border-r peer-focus:after:border-t peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
          {label}
        </label>
      )}
      {isPasswordField && (
        <button
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-xl"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
        </button>
      )}
    </div>
  );
});

FormInput.displayName = 'FormInput';

export { FormInput };
