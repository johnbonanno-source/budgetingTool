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
    id: expense._id,
    title: expense.title,
    cost: expense.cost,
    date: new Date(expense.date).toLocaleDateString(),
    key: expense._id,
  }));

  const totalCost = expenses.reduce(
    (total, expense) => total + expense.cost,
    0
  );

  rows.push({
    id: 'total',
    title: 'Total Spending:',
    cost: totalCost,
    date: '',
  });

  const data = {
    columns,
    rows,
  };

  return (
    <div style={{ height: 'auto', width: '100%' }}>
      <DataGrid {...data} />
    </div>
  );
};

export default ExpenseGrid;

// https://codesandbox.io/s/react-material-ui-vcjmn?file=/src/App.js
