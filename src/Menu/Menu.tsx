import { Logo } from "@dnb/eufemia";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu() {
    return (
        <nav>
            <NavLink exact to="/">
                <span style={{fontSize: '3rem'}}>
                    <Logo size="auto" />
                </span></NavLink>&nbsp;|&nbsp;
            <NavLink to="/environments">Environments</NavLink>&nbsp;|&nbsp;
            <NavLink to="/about">About</NavLink>
        </nav>
    )
}
export default Menu;
