'use client';

import { BadgeCheck, Bell, CreditCard, LogOut, Sparkles } from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components';
import { cn } from '@/lib';
import { signOut, useSession } from 'next-auth/react';

export const NavUser = () => {
  const session = useSession();

  var _user = session?.data?.user;
  _user.fullname = `${_user?.first_name} ${_user?.last_name}`;

  const UserAvatar = ({ className, withFullDescription = false }) => {
    return (
      <>
        <Avatar className={cn('size-full', className)}>
          <AvatarImage src={_user?.image} alt={_user.fullname} />
          <AvatarFallback className="rounded-md">
            {_user?.first_name?.charAt(0) + _user?.last_name?.charAt(0)}
          </AvatarFallback>
        </Avatar>
        {withFullDescription && (
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{_user?.fullname}</span>
            <span className="truncate text-xs">{_user?.email}</span>
          </div>
        )}
      </>
    );
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground aspect-square h-10 cursor-pointer rounded-full p-0!"
            >
              <UserAvatar />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={'bottom'}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <UserAvatar className="size-8 rounded" withFullDescription />
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles />
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                signOut({ redirect: true, redirectTo: '/' });
              }}
            >
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
