/**
 * Export all assets from index so that it can be imported from @/assets directly
 */

//-------------- Images --------------//
export { default as Fallback } from './images/fallback.svg';
export { default as Vite } from './images/vite.svg';
export * from './svg';

//-------------- Lucide React --------------//
export {
  AudioWaveform,
  BookOpen,
  Bot, EyeOff as CloseEyeIcon, Command, ChevronRight as ForwardArrowIcon, Frame, GalleryVerticalEnd,
  Github, Map, Moon, Eye as OpenEyeIcon, PieChart, ChevronLeft as RightArrowIcon, Ellipsis as SettingIcon1, Settings2, LoaderPinwheel as Spinner, SquareTerminal, Sun, EllipsisVertical as ThreeDotIcon
} from 'lucide-react';

