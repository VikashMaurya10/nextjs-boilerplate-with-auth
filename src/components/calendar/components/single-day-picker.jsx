import { format } from 'date-fns';

import { Button, Popover, PopoverContent, PopoverTrigger } from '@/components';
// import { useDisclosure } from '@/hooks/use-disclosure';
import { cn } from '@/lib/utils';

import { useDisclosure } from '../hooks/use-disclosure';
import { SingleCalendar } from './single-calendar';

// ================================== //

const SingleDayPicker = ({
  id,
  onSelect,
  className,
  placeholder,
  labelVariant = 'PPP',
  value,
  ...props
}) => {
  const { isOpen, onClose, onToggle } = useDisclosure({ defaultIsOpen: false });

  const handleSelect = (date) => {
    onSelect(date);
    onClose();
  };

  return (
    <Popover open={isOpen} onOpenChange={onToggle} modal>
      <PopoverTrigger asChild>
        <Button
          id={id}
          variant="outline"
          className={cn(
            'group relative h-9 w-full justify-start whitespace-nowrap px-3 py-2 font-normal hover:bg-inherit',
            className
          )}
          {...props}
        >
          {value && <span>{format(value, labelVariant)}</span>}
          {!value && <span className="text-muted-foreground">{placeholder}</span>}
        </Button>
      </PopoverTrigger>

      <PopoverContent align="center" className="w-fit p-0">
        <SingleCalendar mode="single" selected={value} onSelect={handleSelect} initialFocus />
      </PopoverContent>
    </Popover>
  );
};

// ================================== //

export { SingleDayPicker };
