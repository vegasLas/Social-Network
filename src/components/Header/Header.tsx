import React from 'react'
import logo from '../../pictures/logo.png'
import classes from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import { PropsType } from './HeaderContainer'
const Header: React.FC<PropsType> = (props) => {

    return <header className={classes.header}>
        <NavLink className={classes.headerLink} to={'/'}>
            <img className={classes.logo} src={logo} />
        </NavLink>
        <div className={classes.loginBlock}>
            {props.isAuth
                ? <div>{props.login} -<button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>
}

export default Header;