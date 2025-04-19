'use client';

import { Moon, Sun } from '@/assets';
import { Button } from '@/components';
import { useTheme } from 'next-themes';

export const ThemeToggle = () => {
  const { setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme((prev) => {
      return prev == 'light' ? 'dark' : 'light';
    });
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleThemeChange} className="shrink-0 animate-in fade-in-50">
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
