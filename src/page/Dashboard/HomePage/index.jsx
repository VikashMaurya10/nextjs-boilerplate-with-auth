/**
 * Dashboard home for application
 */
'use client';
import { Button } from '@/components';
import { signOut } from 'next-auth/react';

export const DashboardHomePage = () => {
  return (
    <div>
      DashboardHomePage
      <Button
        onClick={() => {
          signOut();
        }}
      >
        Signout
      </Button>
    </div>
  );
};
