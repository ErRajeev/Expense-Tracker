import React from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__list__item" >
                        <NavLink to="/" >Home</NavLink>
                    </li>
                    <li className="navbar__list__item">
                        <NavLink to="/expense_tracker">Expense Tracker</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Navbar