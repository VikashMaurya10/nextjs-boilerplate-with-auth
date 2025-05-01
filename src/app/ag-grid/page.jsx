'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import {
  ClientSideRowModelModule,
  GridStateModule,
  ModuleRegistry,
  RowSelectionModule,
} from 'ag-grid-community';
import { MasterDetailModule } from 'ag-grid-enterprise';
import { AgGridReact } from 'ag-grid-react';
import { useTheme } from 'next-themes';

import { darkTheme, lightTheme } from './ag-theme';
import { columnDefs, defaultColDef } from './column-defs';
import { data } from './data';
import { DetailCellRenderer } from './detail-cell-renderer';

ModuleRegistry.registerModules([
  RowSelectionModule,
  GridStateModule,
  ClientSideRowModelModule,
]);

// Main Grid Component
const InvoiceDetailGrid = () => {
  const { theme } = useTheme();
  const gridRef = useRef();
  const [selectedRows, setSelectedRows] = useState([]);
  // Data
  const [rowData, setRowData] = useState(data);

  // Function to determine if row should expand
  const isRowMaster = useCallback((dataItem) => {
    // Return true if the row has details
    return (
      dataItem && Array.isArray(dataItem.details) && dataItem.details.length > 0
    );
  }, []);

  // Handle grid ready event
  const onGridReady = useCallback((params) => {
    params.api.sizeColumnsToFit();
    // Select a row programmatically
    const nodeToSelect = params.api.getDisplayedRowAtIndex(2); // Index 2
    if (nodeToSelect) {
      nodeToSelect.setSelected(true);
    }
  }, []);

  // Manual expand/collapse row when clicked
  const onRowClicked = useCallback((params) => {
    // Toggle the expanded state
    const currentState = params.node.expanded;
    params.node.setExpanded(!currentState);
  }, []);

  // Function to handle selection changes
  const onSelectionChanged = useCallback(() => {
    const selectedNodes = gridRef.current.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    setSelectedRows(selectedData);
  }, []);

  // Display selected rows for demonstration
  useEffect(() => {
    console.log('Selected Invoices:', selectedRows);
  }, [selectedRows]);

  const rowSelection = useMemo(() => {
    return {
      mode: 'multiRow',
    };
  }, []);

  return (
    <div className="p-4 h-[500px]">
      <AgGridReact
        theme={theme === 'light' ? lightTheme : darkTheme}
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        // Selection configuration
        rowSelection={rowSelection}
        onSelectionChanged={onSelectionChanged}
        // Master detail configuration
        masterDetail={true}
        detailCellRenderer={DetailCellRenderer}
        isRowMaster={isRowMaster}
        // Event handlers
        onGridReady={onGridReady}
        onRowClicked={onRowClicked}
        // Animation
        animateRows={true}
        // Required modules
        modules={[ClientSideRowModelModule, MasterDetailModule]}
      />
    </div>
  );
};

export default InvoiceDetailGrid;
