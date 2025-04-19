import { SidebarProvider, SidebarTrigger, ThemeToggle } from '@/components';
import { APP_NAME } from '@/config';

import { AppSidebar } from './_components/app-sidebar';
import { NavUser } from './_components/nav-user';

// Export metadata template for the app
export const metadata = {
  title: {
    template: '%s | ' + APP_NAME,
    default: 'Document', // Default title for each page
  },
  description: 'Next js bolierplate with Auth v5',
};

const DoshboardLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="bg-sidebar border-sidebar-border no-scrollbar relative m-2 max-h-[calc(100vh-1rem)] w-full overflow-hidden overflow-y-auto rounded-lg border md:ml-0">
        <div className="bg-sidebar/5 border-b-sidebar-border sticky top-0 flex w-full justify-between rounded-t-lg border-b px-4 py-2.5 backdrop-blur-xs">
          <SidebarTrigger />
          <div className="flex items-center justify-items-center gap-3">
            <ThemeToggle />
            <NavUser />
          </div>
        </div>
        <div className="p-2">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default DoshboardLayout;
