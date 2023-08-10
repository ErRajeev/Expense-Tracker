import React, { useState } from "react";
import ExpenseItem from "../expense_items/ExpenseItem";
import './ExpenseList.css'

const ExpenseList = (props) => {
    const { expenses = [] } = props;
    if (expenses.length === 0) {
        return <h3 className="error__msg">No Expenses Found</h3>
    }
    // console.log();

    return (
        <>
            <div className="expenses">
                <div className="expenses-list">{
                    expenses?.map((element) => (
                        <ExpenseItem
                            key={element._id}
                            title={element.title}
                            price={element.amount}
                            date={element.date}
                        />
                    ))}
                </div>
            </div>
        </>
    )
};
export default ExpenseList;