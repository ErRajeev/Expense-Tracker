import React, { useState } from "react";
import "./NewExpenseForm.css"

const NewExpenseForm = (props) => {

    const { save } = props;

    let [title, setTitle] = useState('');
    let [amount, setAmount] = useState('');
    let [date, setDate] = useState('');


    const onTitleChangeHandler = (event) => setTitle(event.target.value)
    const onAmountChangeHandler = (event) => setAmount(event.target.value)
    const onDateChangeHandler = (event) => setDate(event.target.value)


    const onFormSubmitHandler = (event) => {
        event.preventDefault();
        const new_expense = {
            title: title,
            amount: amount,
            date: new Date(date)
        }
        // console.log(new_expense);
        save(new_expense)
        setTitle('')
        setAmount('')
        setDate('')
    };


    return (
        <>
            <form onSubmit={onFormSubmitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="expense_title" name="title" onChange={onTitleChangeHandler} value={title} />
                    </div>

                    <div className="new-expense__control">
                        <label htmlFor="expense_amount">Amount</label>
                        <input type="number" id="expense_amount" name="amount" min="0" max="10000" onChange={onAmountChangeHandler} value={amount} />
                    </div>

                    <div className="new-expense__control">
                        <label htmlFor="expense_date">Date</label>
                        <input type="date" id="expense_date" name="date" onChange={onDateChangeHandler} value={date} />
                    </div>

                </div>

                <div className="new-expense__actions">
                    <button>Cancel</button>
                    <button>Add Expense</button>
                </div>
            </form>
        </>
    )
};
export default NewExpenseForm;