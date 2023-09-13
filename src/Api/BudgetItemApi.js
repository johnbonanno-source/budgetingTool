const addBudgetItemHandler = async ( budgetObject ) => {
    try {
        
        const title = budgetObject.title;
        const price = budgetObject.amount;
        const date = budgetObject.date;

      const response = await fetch('http://localhost:2001/BudgetItem', {
        method: 'POST',
        body: JSON.stringify({ title, price, date }),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Budget item insertion failed');
      }
      
      const responseData = await response.json();
  
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };
  
  export default addBudgetItemHandler;
  