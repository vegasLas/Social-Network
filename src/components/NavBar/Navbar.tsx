import React from 'react'
import classes from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <NavLink className={classes.item} to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
            <NavLink className={classes.item} to='/dialogs' activeClassName={classes.activeLink}>Dialogs</NavLink>
            <NavLink className={classes.item} to='/users' activeClassName={classes.activeLink}>Users</NavLink>
            <NavLink className={classes.item} to='/news' activeClassName={classes.activeLink}>News</NavLink>
            <NavLink className={classes.item} to='/music' activeClassName={classes.activeLink}>Music</NavLink>
            <NavLink className={classes.item} to='/setings' activeClassName={classes.activeLink}>Setings</NavLink>
        </nav>
    )
}

export default Navbar