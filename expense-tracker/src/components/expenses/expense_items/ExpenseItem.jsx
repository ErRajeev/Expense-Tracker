import React, { useState } from "react"
import './ExpenseItems.css'
import ExpenseDate from "../expense_date/ExpenseDate";

const ExpenseItem = (props) => {
    const { date = Date(), title = '', price = 0 } = props; // Object Destructring
    const [tittle, setTitle] = useState(title)
    return (
        <>
            <div className="expense-item">
                <ExpenseDate date={date} />
                <div className="expense-item__description">
                    <h2 id="title">{tittle}</h2>
                    <div className="expense-item__price">${price}</div>
                </div>
            </div>
        </>
    )
};
export default ExpenseItem;