'use client';

import { useRef } from 'react';

import { useDrag } from 'react-dnd';

import { cn } from '@/lib/utils';

export const ItemTypes = {
  EVENT: 'event',
};

export const DraggableEvent = ({ event, children }) => {
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.EVENT,
    item: { event },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  }));

  drag(ref);

  return (
    <div ref={ref} className={cn(isDragging && 'opacity-40')}>
      {children}
    </div>
  );
};
