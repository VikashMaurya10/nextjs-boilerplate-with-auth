'use client';

import { useState } from 'react';

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { SettingIcon1, ThreeDotIcon } from '@/assets';
import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components';

import { DataTablePagination } from './data-table-pagination';

export const DataTable = ({ columns, data }) => {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  const [serarchBy, setSearchBy] = useState(table.getAllColumns()[0].id);

  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center">
        <div className="border-cl200 flex items-center rounded border">
          <Input
            placeholder={`Search by ${serarchBy == 'isEnable' ? 'status' : serarchBy}...`}
            value={table.getColumn(serarchBy)?.getFilterValue() ?? ''}
            onChange={(event) => {
              table.getColumn(serarchBy)?.setFilterValue(event.target.value);
            }}
            className="max-w-sm rounded-none border-none"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="reset" size="reset" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <ThreeDotIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="text-center">Search by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {table
                .getAllColumns()
                .slice(0, table.getAllColumns()?.length - 2)
                .map((column, i) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={i}
                      className="capitalize"
                      checked={column.id == serarchBy}
                      onCheckedChange={() => {
                        setSearchBy(column.id);
                      }}
                    >
                      {column.id == 'isEnable' ? 'status' : column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="ml-auto hidden h-8 lg:flex">
              <SettingIcon1 className="mr-2 h-4 w-4" /> view
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column, i) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={i}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => {
                      column.toggleVisibility(!!value);
                    }}
                  >
                    {column.id == 'isEnable' ? 'status' : column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup?.id}
                className="[&_th:first-child_button]:ml-0 [&_th_button]:-ml-3"
              >
                {headerGroup?.headers?.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className="[&_td:first-child]:pl-5"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
};
