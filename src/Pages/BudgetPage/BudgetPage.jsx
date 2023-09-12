import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { Grid, Box } from "@mui/material";
import {
  InputComponent,
  ButtonComponent,
  DatePickerComponent,
} from "../../components";
import LCC from "../../Assets/LCC.jpg";
import ExpenseForm from "../../Components/ExpenseForm/ExpenseForm";
import ExpenseList from "../../Components/ExpenseList/ExpenseList";
import { BoxComponent } from "../../components";
import { DataGrid } from "@mui/x-data-grid";

function BudgetPage() {
  // balance box
  const [balance, setBalance] = useState(10);
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
  ]);

  const theme = useTheme();

  const handleButtonClick = (event) => {
    const buttonName = event.target.name;
    const InputComponentField = document.getElementById(
      buttonName === "deposit" ? "incrementBalance" : "decrementBalance"
    );
    const delta = parseInt(InputComponentField.value);
    if (typeof delta === "number" && !isNaN(delta)) {
      setBalance(buttonName === "deposit" ? balance + delta : balance - delta);
    }
  };

  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    date: new Date(),
    id: "",
  });

  const handleChange = (name, value) => {
    if (name === "date" && value instanceof Date && !isNaN(value)) {
      const newDate = new Date(value);
      setExpense({ ...expense, [name]: newDate });
    } else {
      setExpense({ ...expense, [name]: value });
    }
  };

  const handleSubmit = () => {
    setExpenses([...expenses, expense]);
  };

  const columns = [
    { field: "title", headerName: "Title", width: 200 },
    { field: "amount", headerName: "Amount", width: 150 },
    { field: "date", headerName: "Date", width: 200 },
  ];

  const rows = expenses.map((expense) => ({
    id: expense.id,
    title: expense.title,
    amount: expense.amount,
    date: expense.date.toISOString().split("T")[0], // Format date as YYYY-MM-DD
  }));

  const data = {
    columns,
    rows,
    initialState: {
      pagination: { paginationModel: { pageSize: 5 } },
    },
    pageSizeOptions: [5, 10, 25],
  };

  const gridItems = [
    { label: "Deposit", component: <InputComponent id={"incrementBalance"} /> },
    {
      label: "Withdraw",
      component: <InputComponent id={"decrementBalance"} />,
    },
    {
      component: (
        <ButtonComponent name="deposit" onClick={handleButtonClick}>
          Deposit
        </ButtonComponent>
      ),
    },
    {
      component: (
        <ButtonComponent name="withdraw" onClick={handleButtonClick}>
          Withdraw
        </ButtonComponent>
      ),
    },
  ];

  const formItems = [
    {
      label: "Title",
      component: (
        <InputComponent
          type="text"
          name="title"
          value={expense.title}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      ),
    },
    {
      label: "Amount",
      component: (
        <InputComponent
          type="text"
          name="amount"
          value={expense.amount}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      ),
    },
    {
      label: "Date",
      component: (
        <DatePickerComponent
          type="date"
          name="date"
          value={expense.date}
          onChange={(date) => handleChange("date", date)}
        />
      ),
    },
    {
      label: "Submit",
      component: (
        <ButtonComponent
          bgColor="white"
          type="button"
          onClick={handleSubmit}
          width="100%"
        >
          Add Expense
        </ButtonComponent>
      ),
    },
  ];

  return (
    <>
      <BoxComponent>
        <img src={LCC} alt="pic" />
        
        <Box
          sx={{
            backgroundColor: `${theme.palette.green.main}`,
            padding: "2% 2%",
            borderRadius: "12px",
            gap: "1rem",
          }}
        >
          <h1>Balance: {balance} </h1>
          <Grid container justifyContent="center" spacing={2}>
            {gridItems.map((item, index) => (
              <Grid item xs={6} key={index}>
                <h6>{item.label}</h6>
                {item.component}
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          sx={{
            backgroundColor: `${theme.palette.green.main}`,
            padding: "2% 2%",
            borderRadius: "12px",
            gap: "1rem",
          }}
        >
          <Grid container justifyContent="center" spacing={2}>
            {formItems.map((item, index) => (
              <React.Fragment key={index}>
                <Grid item xs={3}>
                  <p>{item.label}</p>
                  {item.component}
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            backgroundColor: `${theme.palette.green.main}`,
            padding: "2% 2%",
            borderRadius: "12px",
            gap: "1rem",
            height: "400px",
          }}
        >
          <div style={{ height: 350, width: "100%" }}>
            <DataGrid
              {...data}
              initialState={{
                ...data.initialState,
                pagination: { paginationModel: { pageSize: 5 } },
              }}
              pageSizeOptions={[5, 10, 25]}
            />
          </div>

        </Box>
      </BoxComponent>
    </>
  );
}

export default BudgetPage;
