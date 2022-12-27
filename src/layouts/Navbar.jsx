import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
           <NavLink to={"/home"} className="navLink-area">Home</NavLink>
           <NavLink to={"/showBook"} className="navLink-area">Show Book</NavLink>
           <NavLink to={"/addBook"} className="navLink-area">Add Book</NavLink>
        </nav>
    );
};

export default Navbar;