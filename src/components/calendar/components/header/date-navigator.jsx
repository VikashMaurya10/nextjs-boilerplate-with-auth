import { useMemo } from 'react';

import { formatDate } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Badge, Button } from '@/components';

import { useCalendar } from '@/components/calendar/contexts/calendar-context';
import { getEventsCount, navigateDate, rangeText } from '@/components/calendar/helpers';

export const DateNavigator = ({ view, events }) => {
  const { selectedDate, setSelectedDate } = useCalendar();

  const month = formatDate(selectedDate, 'MMMM');
  const year = selectedDate.getFullYear();

  const eventCount = useMemo(
    () => getEventsCount(events, selectedDate, view),
    [events, selectedDate, view]
  );

  const handlePrevious = () => setSelectedDate(navigateDate(selectedDate, view, 'previous'));
  const handleNext = () => setSelectedDate(navigateDate(selectedDate, view, 'next'));

  return (
    <div className="space-y-0.5">
      <div className="flex items-center gap-2">
        <span className="text-lg font-semibold">
          {month} {year}
        </span>
        <Badge variant="outline" className="px-1.5">
          {eventCount} events
        </Badge>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          className="size-6.5 px-0 [&_svg]:size-4.5"
          onClick={handlePrevious}
        >
          <ChevronLeft />
        </Button>

        <p className="text-sm text-muted-foreground">{rangeText(view, selectedDate)}</p>

        <Button variant="outline" className="size-6.5 px-0 [&_svg]:size-4.5" onClick={handleNext}>
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};
