import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const ExpenseGrid = ({ expenses }) => {
  const columns = [
    {
      field: 'title',
      headerName: 'Title',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'date',
      headerName: 'Date',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
  ];

  const rows = expenses.map((expense) => ({
    id: expense.id,
    title: expense.title,
    cost: expense.cost,
    date: expense.date.toISOString().split('T')[0],
  }));

  const data = {
    columns,
    rows,
  };

  return (
    <div style={{ height: 350, width: '100%', paddingTop: '2rem' }}>
      <DataGrid {...data} />
    </div>
  );
};

export default ExpenseGrid;
