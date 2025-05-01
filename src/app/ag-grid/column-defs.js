import { Calendar, ChevronDown, ChevronRight } from 'lucide-react';

import { cn } from '@/lib';

// Default column definitions
export const defaultColDef = {
  sortable: true,
  filter: true,
  resizable: true,
};

// Column definitions for the main grid
export const columnDefs = [
  {
    width: 50,
    cellRenderer: (params) => (
      <div className="flex items-center justify-center h-full">
        {params.node.expanded ? (
          <ChevronDown className="h-4 w-4 text-gray-500" />
        ) : (
          <ChevronRight className="h-4 w-4 text-gray-500" />
        )}
      </div>
    ),
  },
  {
    field: 'name',
    headerName: 'Candidate Name',
    flex: 1,
    minWidth: 200,
    filter: 'agTextColumnFilter',
    cellRenderer: (params) => (
      <div className="flex items-center gap-2">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
            {params.value}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {params.data?.jobTitle}
          </span>
        </div>
      </div>
    ),
  },
  {
    field: 'id',
    headerName: 'Role Applied',
    width: 130,
    filter: 'agTextColumnFilter',
    cellRenderer: (params) => (
      <div className="flex items-center h-full cursor-pointer text-primary hover:text-primary/80 text-sm font-medium dark:text-primary/80 dark:hover:text-primary/60">
        {params.value}
      </div>
    ),
    onCellClicked: (params) => onViewJobDescription?.(params.data?.id || ''),
  },
  {
    field: 'matchScore',
    headerName: 'Resume Match Score',
    width: 150,
    filter: 'agNumberColumnFilter',
    cellRenderer: (params) => (
      <div
        className={cn(
          'flex items-center gap-1.5 rounded-md px-2 py-1 text-sm font-medium',
          parseInt(params.value) >= 85
            ? 'text-emerald-700 dark:text-emerald-300'
            : parseInt(params.value) >= 75
              ? 'text-blue-700 dark:text-blue-300'
              : 'text-amber-700 dark:text-amber-300'
        )}
      >
        {params.value}%
      </div>
    ),
  },
  {
    field: 'resumeShortlisted',
    headerName: 'Resume Shortlisted',
    width: 150,
    filter: 'agTextColumnFilter',
    cellRenderer: (params) => (
      <div
        className={cn(
          'inline-flex items-center rounded-md px-2 py-1 text-sm font-medium',
          params.value
            ? 'text-emerald-700 dark:text-emerald-300'
            : 'text-gray-500 dark:text-gray-400'
        )}
      >
        {params.value ? 'Yes' : 'No'}
      </div>
    ),
  },
  {
    field: 'telephonicScheduled',
    headerName: 'Telephonic Scheduled',
    width: 170,
    filter: 'agTextColumnFilter',
    cellRenderer: (params) => (
      <div
        className={cn(
          'inline-flex items-center rounded-md px-2 py-1 text-sm font-medium',
          params.value
            ? 'text-emerald-700 dark:text-emerald-300'
            : 'text-gray-500 dark:text-gray-400'
        )}
      >
        {params.value ? 'Yes' : 'No'}
      </div>
    ),
  },
  {
    field: 'telephonicScheduleDateTime',
    headerName: 'Schedule',
    width: 170,
    filter: 'agDateColumnFilter',
    cellRenderer: (params) => (
      <div className="flex items-center h-full text-sm">
        {params.value ? (
          <div className="flex items-center gap-2 text-gray-900 dark:text-gray-100">
            <Calendar className="h-4 w-4 text-primary/70" />
            {params.value}
          </div>
        ) : (
          <span className="text-gray-500 dark:text-gray-400">
            Not scheduled
          </span>
        )}
      </div>
    ),
  },
  {
    field: 'telephonicResult',
    headerName: 'Telephonic Result',
    width: 150,
    filter: 'agTextColumnFilter',
    cellRenderer: (params) => {
      if (!params.value)
        return <span className="text-gray-500 dark:text-gray-400">-</span>;
      return (
        <div
          className={cn(
            'inline-flex items-center rounded-md px-2 py-1 text-sm font-medium',
            params.value === 'Pass'
              ? 'text-emerald-700 dark:text-emerald-300'
              : 'text-red-700 dark:text-red-300'
          )}
        >
          {params.value}
        </div>
      );
    },
  },
  {
    field: 'shortlistedForTechnical1',
    headerName: 'Technical 1 Shortlisted',
    width: 170,
    filter: 'agTextColumnFilter',
    cellRenderer: (params) => (
      <div
        className={cn(
          'inline-flex items-center rounded-md px-2 py-1 text-sm font-medium',
          params.value
            ? 'text-emerald-700 dark:text-emerald-300'
            : 'text-gray-500 dark:text-gray-400'
        )}
      >
        {params.value ? 'Yes' : 'No'}
      </div>
    ),
  },
];
