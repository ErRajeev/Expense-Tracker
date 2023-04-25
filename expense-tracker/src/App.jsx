import { useEffect, useState } from 'react'
import './App.css'
import './components/expenses/expense_items/ExpenseItem'
import ExpenseList from './components/expenses/expense_list/ExpenseList';
import NewExpense from './components/new_expense/NewExpense';

const Data = []

const App = () => {
  const [expenses, setExpenses] = useState(Data)
  const onNewExpenseSubmit = (new_expense) => {
    // console.log(new_expense);
    fetch('http://localhost:3000/expenses', {
      method: 'POST',
      body: JSON.stringify(new_expense)
    }).then((res) => {
      setExpenses((previous_expenses) => [new_expense, ...previous_expenses]);
    })
  }

  useEffect(() => {
    fetch('http://localhost:3000/expenses').then((res) => {
      res.json().then((json) => {
        console.log(json);
        setExpenses(json)
      })
    })
  }, [])


  return (
    <>
      <div className='app_main'>
        <div className='app_main_heading'>
          <h1>Track Your Expenses</h1>
        </div>
        <NewExpense onNewExpenseSave={onNewExpenseSubmit} />
        <ExpenseList expenses={expenses} />
      </div>
    </>
  )
}

export default App
