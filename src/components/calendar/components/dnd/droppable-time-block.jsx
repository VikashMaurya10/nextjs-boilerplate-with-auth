'use client';

import { differenceInMilliseconds, parseISO } from 'date-fns';
import { useDrop } from 'react-dnd';

// import { ItemTypes } from '@/calendar/components/dnd/draggable-event';
import { useUpdateEvent } from '@/calendar/hooks/use-update-event';
import { cn } from '@/lib/utils';
import { ItemTypes } from './draggable-event';

export const DroppableTimeBlock = ({ date, hour, minute, children }) => {
  const { updateEvent } = useUpdateEvent();

  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.EVENT,
      drop: (item) => {
        const droppedEvent = item.event;

        const eventStartDate = parseISO(droppedEvent.startDate);
        const eventEndDate = parseISO(droppedEvent.endDate);

        const eventDurationMs = differenceInMilliseconds(eventEndDate, eventStartDate);

        const newStartDate = new Date(date);
        newStartDate.setHours(hour, minute, 0, 0);
        const newEndDate = new Date(newStartDate.getTime() + eventDurationMs);

        updateEvent({
          ...droppedEvent,
          startDate: newStartDate.toISOString(),
          endDate: newEndDate.toISOString(),
        });

        return { moved: true };
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [date, hour, minute, updateEvent]
  );

  return (
    <div ref={drop} className={cn('h-[24px]', isOver && canDrop && 'bg-accent/50')}>
      {children}
    </div>
  );
};
