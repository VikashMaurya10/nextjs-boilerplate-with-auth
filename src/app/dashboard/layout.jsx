import { SidebarProvider, SidebarTrigger } from '@/components';
import { APP_NAME } from '@/config';
import { AppSidebar } from './_components/app-sidebar';

// Export metadata template for the app
export const metadata = {
  title: {
    template: '%s | ' + APP_NAME,
    default: 'Document' // default title for each page
  },
  description: 'Next js bolierplate with Auth v5'
};
const Documentlayout = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="bg-sidebar m-2 ml-0 w-full rounded-lg p-3">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default Documentlayout;
