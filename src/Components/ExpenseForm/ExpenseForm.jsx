import React, { useState } from "react";
import { Grid } from "@mui/material";
import {
  InputComponent,
  ButtonComponent,
  DatePickerComponent,
} from "../../components";
import ExpensesApi from "../../Api/ExpensesApi";

const ExpenseForm = ({ setExpenses }) => {
  const [expense, setExpense] = useState({
    title: "",
    cost: "",
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

  const handleSubmit = async () => {
    const newExpense = {
      title: expense.title,
      cost: expense.cost,
      date: expense.date,
      isReoccuring: 'false',
    };
    try {
      const response = await ExpensesApi("createExpense").post(newExpense);
      setExpenses(response);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
    setExpense({
      title: "",
      cost: "",
      date: new Date(),
      id: "",
    });
  };

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
      label: "Cost",
      component: (
        <InputComponent
          type="text"
          name="cost"
          value={expense.cost}
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
      label: <span style={{ color: "transparent" }}>Submit</span>,
      component: (
        <ButtonComponent
          bgColor="white"
          type="button"
          onClick={handleSubmit}
          width="100%"
        >
          Submit
        </ButtonComponent>
      ),
    },
  ];

  return (
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
  );
};

export default ExpenseForm;
