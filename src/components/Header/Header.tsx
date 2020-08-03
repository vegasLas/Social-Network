import React from 'react'
import logo from '../../pictures/logo.png'
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom'
import {PropsType} from './HeaderContainer'
const Header: React.FC<PropsType> = (props) => {
    
    return <header className = {classes.header}>
        <img className = {classes.logo} src = {logo}/>
        <div className={classes.loginBlock}>
        {props.isAuth
            ? <div>{props.login} -<button onClick={props.logout}>Log out</button></div>
            : <NavLink to={'/login'}>Login</NavLink>
        }
        </div>
    </header>
}

export default Header;