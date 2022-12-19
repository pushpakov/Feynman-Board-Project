import React from "react"
import "./NavBar.css"
import { NavLink } from "react-router-dom"
const NavBar = () => {
    return <div>
        <ul>
            
            <li><NavLink to="/">FEYNMAN BOARD</NavLink></li>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
        </ul>
    </div>
}
export default NavBar;