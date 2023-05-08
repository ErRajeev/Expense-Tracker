import React, { useState } from "react";
import ExpenseItem from "../expense_items/ExpenseItem";
import './ExpenseList.css'

const ExpenseList = (props) => {
    const { expenses = [] } = props;
    if (expenses.length === 0) {
        return <h3 className="error__msg">No Expenses Found</h3>
    }

    return (
        <>
            <div className="expenses">
                <div className="expenses-list">{
                    expenses.map((e) => (
                        <ExpenseItem
                            key={e.id}
                            title={e.title}
                            price={e.amount}
                            date={e.date || new Date()}
                        />
                    ))}
                </div>
            </div>
        </>
    )
};
export default ExpenseList;