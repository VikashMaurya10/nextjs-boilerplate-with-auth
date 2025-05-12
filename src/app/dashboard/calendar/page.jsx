import { ClientContainer } from '@/components/calendar/components/client-container';
import { CalendarProvider } from '@/components/calendar/contexts/calendar-context';
import { getEvents, getUsers } from '@/components/calendar/requests';

const Calendar = async () => {
  const [events, users] = await Promise.all([getEvents(), getUsers()]);

  return (
    <CalendarProvider users={users} events={events}>
      <ClientContainer view="month" />
    </CalendarProvider>
  );
};

export default Calendar;
