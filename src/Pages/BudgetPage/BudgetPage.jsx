import React, { useState } from 'react';
import { BalanceBox } from '../../components';
import ExpenseForm from '../../Components/ExpenseForm/ExpenseForm';
import ExpenseList from '../../Components/ExpenseList/ExpenseList';
import Wrapper from '../../Components/Wrapper/Wrapper';

function BudgetPage() {
  const [balance, setBalance] = useState(10);
  const [expense, setExpense] = useState({
    title: '',
    amount: '',
    date: new Date(),
  });
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },

    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
  ];
  return (
    <>
      <Wrapper>
        <BalanceBox balance={balance} setBalance={setBalance} />
        <ExpenseForm expense={expense} setExpense={setExpense} />
        <ExpenseList expenses={expenses} />
      </Wrapper>
    </>
  );
}

export default BudgetPage;
