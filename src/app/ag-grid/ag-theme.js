import { iconSetQuartzLight, themeQuartz } from 'ag-grid-community';

// To use myTheme in an application, pass it to the theme grid option
export const darkTheme = themeQuartz.withPart(iconSetQuartzLight).withParams({
  backgroundColor: '#101828',
  browserColorScheme: 'dark',
  chromeBackgroundColor: {
    ref: 'foregroundColor',
    mix: 0.07,
    onto: 'backgroundColor',
  },
  foregroundColor: '#FFFFFF',
  headerFontSize: 14,
});

export const lightTheme = themeQuartz.withParams({
  browserColorScheme: 'light',
  headerFontSize: 14,
});
