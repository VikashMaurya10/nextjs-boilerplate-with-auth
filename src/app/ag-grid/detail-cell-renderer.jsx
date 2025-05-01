import { ClientSideRowModelModule } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { useTheme } from 'next-themes';

import { darkTheme, lightTheme } from './ag-theme';

export const DetailCellRenderer = ({ data }) => {
  const { theme } = useTheme();

  // Column definitions for the detail grid
  const detailColumnDefs = [
    { field: 'lineNumber', headerName: 'Line #', width: 80 },
    { field: 'orgUnit', headerName: 'Org Unit', width: 120 },
    { field: 'glAccount', headerName: 'GL Account', width: 110 },
    { field: 'alocBase', headerName: 'Allocation Base', width: 140 },
    { field: 'branch', headerName: 'Branch', width: 100 },
    { field: 'channel', headerName: 'Channel', width: 120 },
    { field: 'class', headerName: 'Class', width: 140 },
    { field: 'department', headerName: 'Department', width: 120 },
    { field: 'entity', headerName: 'Entity', width: 100 },
    { field: 'intercompany', headerName: 'Intercompany', width: 130 },
    { field: 'project', headerName: 'Project', width: 100 },
    { field: 'description', headerName: 'Description', width: 180 },
  ];

  return (
    <AgGridReact
      theme={theme === 'light' ? lightTheme : darkTheme}
      columnDefs={detailColumnDefs}
      rowData={data.details || []}
      defaultColDef={{
        sortable: true,
        filter: true,
        resizable: true,
      }}
      modules={[ClientSideRowModelModule]}
    />
  );
};
