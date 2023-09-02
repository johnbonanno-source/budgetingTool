import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import classes from './ExpenseForm.module.css';
import 'react-datepicker/dist/react-datepicker.css';

const ExpenseForm = ({ handleSetExpense }) => {


  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    date: new Date(),
  });

  const handleChange = (name, value) => {
    setExpense({ ...expense, [name]: value });
    console.log(expense)
    
  };

  const handleSubmit = async (expense) => {
    console.log("expense item: ");
    console.log("expense");
    handleSetExpense(expense);
  };

  return (
    <>
      <form className={classes.formStyle} onSubmit={handleSubmit}>
        <div className={classes.inputContainer}>
          <input
            // id='title'
            type='text'
            name='title'
            value={expense.title}
            className={classes.expenseInput}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>
        <div className={classes.inputContainer}>
          <input
            // id='amount'
            type='number'
            name='amount'
            value={expense.amount}
            className={classes.expenseInput}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>
        <div className={classes.inputContainer}>
          <DatePicker
            selected={expense.date}
            wrapperClassName={classes.expenseInput}
            onChange={(date) => handleChange('date', date)}
            dateFormat='MM/dd/yyyy'
          />
        </div>
      <div className={classes.inputContainer}>
        <button className={classes.submitExpense} type='submit'>
          Submit
        </button>
      </div>
      </form>
    </>
  );
};

export default ExpenseForm;
