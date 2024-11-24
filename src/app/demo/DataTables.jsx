'use client';
import { CopyIcon, OpenEyeIcon, SyncIcon, ThreeDotIcon, EditIcon, TrashIcon } from '@/assets';
import {
  Button,
  DataTable,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  toast
} from '@/components';
import { DataTableColumnHeader } from '@/components/data-table/DataTableColumnHeader';

export const DataTables = () => {
  const CategoryCols = [
    {
      accessorKey: 'name',
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Name" />;
      }
    },
    {
      accessorKey: 'slug',
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title={'Slug'} />;
      }
    },
    {
      accessorKey: 'isEnable',
      header: 'Status',
      cell: ({ row }) => {
        let id = row.original._id;
        let isEnable = !row.getValue('isEnable');
        return (
          <div className="font-medium">
            {row.getValue('isEnable') ? (
              <Button size="sm">
                Enabled
                <SyncIcon className={`animate-reverse-spin} ml-1 text-lg`} />
              </Button>
            ) : (
              <Button size="sm" variant="ghost">
                Disabled
                <SyncIcon className={`animate-reverse-spin} ml-1 text-lg`} />
              </Button>
            )}
          </div>
        );
      }
    },
    {
      id: 'actions',
      header: () => <div>Action</div>,
      cell: ({ row }) => {
        const action = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <ThreeDotIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="text-center">Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  // navigator.clipboard.writeText(action._id);
                  return toast.info(`Row id copied`);
                }}
              >
                <CopyIcon className="mr-1" /> Copy row ID
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => {}}>
                <OpenEyeIcon className="mr-1 text-lg" /> View
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => {}}>
                <EditIcon className="mr-1 text-lg" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem className="text-clred700 focus:bg-red-900" onClick={() => {}}>
                <TrashIcon className="mr-1 text-lg" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      }
    }
  ];
  return <DataTable columns={CategoryCols} data={[{}, {}, {}]} />;
};
