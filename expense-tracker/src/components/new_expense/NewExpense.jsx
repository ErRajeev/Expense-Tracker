import React from "react";
import NewExpenseForm from "./new_expense_form/NewExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    
    const {onNewExpenseSave} = props;

    const onAddExpense = (new_expense) => {
        const modified_expense = {
            ...new_expense,
            id: Math.random() * 10
        }
        console.log('dfghj', new_expense)
        onNewExpenseSave(modified_expense);
    }

    return (
        <>
            <div className="new-expense">
                <NewExpenseForm save={onAddExpense} />
            </div>
        </>
    )
}
export default NewExpense;