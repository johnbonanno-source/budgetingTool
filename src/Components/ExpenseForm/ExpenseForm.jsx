import React, { useState } from 'react';
import classes from './ExpenseForm.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import { InputComponent, ButtonComponent, DatePickerComponent }  from '../../components';
const ExpenseForm = ({ handleSetExpense }) => {


  const [expense, setExpense] = useState({
    title: '',
    amount: '',
    date: new Date(),
  });

  const handleChange = (name, value) => {
    setExpense({ ...expense, [name]: value });
    console.log(expense)
    
  };

  const handleSubmit = async (expense) => {
    
    console.log('expense item: ');
    console.log('expense');
    handleSetExpense(expense);
  };

  return (
    <>
   
      <form className={classes.formStyle} onSubmit={handleSubmit}>
        {/* <div className={classes.inputContainer}> */}
          <InputComponent
            type='text'
            name='title'
            value={expense.title}
            className={classes.expenseInput}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        {/* </div> */}
        <div className={classes.inputContainer}>
          <InputComponent
            type='text'
            name='amount'
            value={expense.amount}
            className={classes.expenseInput}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>
        {/* <div className={classes.inputContainer}> */}
          <DatePickerComponent
            selected={expense.date}
            onChange={(date) => handleChange('date', date)}
          />
        {/* </div> */}
      {/* <div className={classes.inputContainer}> */}
        <ButtonComponent type='submit'>
          Submit
        </ButtonComponent>
      {/* </div> */}
      </form>
     

    </>
  );
};

export default ExpenseForm;
